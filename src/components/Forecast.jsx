'use client';
import React, { useState } from 'react';
import { Upload, Table } from 'antd';
import Papa from 'papaparse';
import * as tf from '@tensorflow/tfjs';

const Forecast = () => {
    const [data, setData] = useState([]);
    const [model, setModel] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [forecastErrors, setForecastErrors] = useState([]);

    const handleUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const csvData = event.target.result;
            parseCSV(csvData);
        };
        reader.readAsText(file);
        return false; // Prevent automatic upload
    };

    const parseCSV = (csvData) => {
        Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setData(results.data);
                trainModel(results.data); // Train model after parsing
            },
        });
    };

    const trainModel = async (csvData) => {
        // Prepare data for training
        const inputs = csvData.map(item => [
            parseFloat(item.Seasonality),
            parseFloat(item["Marketing Spend"]),
            parseFloat(item["Website Traffic"]),
            parseFloat(item["Course Price"])
        ]);
        const labels = csvData.map(item => parseFloat(item.Demand));

        // Convert to tensors
        const inputTensor = tf.tensor2d(inputs);
        const labelTensor = tf.tensor2d(labels.map(label => [label]));

        // Define a more complex model
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [4] }));
        model.add(tf.layers.dropout({ rate: 0.2 })); // Dropout layer for regularization
        model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        model.add(tf.layers.dense({ units: 1 }));

        // Compile the model with a lower learning rate
        model.compile({
            optimizer: tf.train.adam(0.001), // Adjusted learning rate
            loss: 'meanAbsoluteError' // Using MAE can sometimes yield better results for demand forecasting
        });

        // Train the model with early stopping
        await model.fit(inputTensor, labelTensor, {
            epochs: 200,
            validationSplit: 0.2,
            callbacks: {
                onEpochEnd: async (epoch, logs) => {
                    if (logs.val_loss < 0.02) { // Stop if validation loss is below threshold
                        console.log(`Stopping early at epoch ${epoch + 1}`);
                        await model.stopTraining;
                    }
                }
            }
        });

        setModel(model); // Store the trained model

        // Calculate forecast errors after training
        calculateForecastErrors(inputs, labels,model);
    };

    const calculateForecastErrors = async (inputs, actualLabels,model) => {
        const inputTensor = tf.tensor2d(inputs);
        
        // Make predictions using the trained model
        const predictions = model.predict(inputTensor);
        
        // Convert predictions to array
        const predictedValues = await predictions.array();

        // Calculate absolute errors and MAPE
        const errors = actualLabels.map((actual, index) => {
            const predicted = predictedValues[index][0];
            return {
                actual,
                predicted: parseInt(predicted),
                absoluteError:parseInt(Math.abs(actual - predicted)),
                percentageError: parseInt(Math.abs((actual - predicted) / actual) * 100),
            };
        });

        setForecastErrors(errors); // Store forecast errors in state
    };

    const makePrediction = async () => {
        if (!model) return;

        // Example input for prediction (Seasonality=1.5, Marketing Spend=4000,
        // Website Traffic=2500 and Course Price=110)
        const exampleInput = tf.tensor2d([[1.5, 4000, 2500, 110]]);
        const prediction = model.predict(exampleInput);
        
        prediction.array().then(array => {
            setPrediction(Math.round(array[0][0])); // Round the predicted value
        });
    };

    const columns = [
        { title: 'Month', dataIndex: 'Month', key: 'Month' },
        { title: 'Demand', dataIndex: 'Demand', key: 'Demand' },
        { title: 'Seasonality', dataIndex: 'Seasonality', key: 'Seasonality' },
        { title: 'Marketing Spend', dataIndex: 'Marketing Spend', key: 'Marketing Spend' },
        { title: 'Website Traffic', dataIndex: 'Website Traffic', key: 'Website Traffic' },
        { title: 'Course Price', dataIndex: 'Course Price', key: 'Course Price' },
    ];

    return (
       <div style={{ padding: 20 }}>
            <h1>Upload CSV File for Demand Forecasting</h1>
            <Upload beforeUpload={handleUpload} accept=".csv" showUploadList={false}>
                <button className='custom-btn custom-btn--success'>Click to Upload</button>
            </Upload>
            <button className='custom-btn custom-btn--success mx-2' onClick={makePrediction} style={{ marginTop: 20 }}>Make Prediction</button>
            {prediction !== null && <h2 className='mt-3'>Predicted Demand Value: {prediction}</h2>}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-6'>
                        
                        <Table dataSource={data} columns={columns} rowKey="Month" style={{ marginTop: 20 }} />
                    </div>
                    <div className='col-xl-6'>
                        {forecastErrors.length > 0 && (
                            <div style={{ marginTop: 20 }}>
                                <h3>Forecast Errors</h3>
                                <Table
                                    dataSource={forecastErrors}
                                    columns={[
                                        { title: 'Actual Demand', dataIndex: 'actual', key: 'actual' },
                                        { title: 'Predicted Demand', dataIndex: 'predicted', key: 'predicted' },
                                        { title: 'Absolute Error', dataIndex: 'absoluteError', key: 'absoluteError' },
                                        { title: 'Percentage Error (%)', dataIndex: 'percentageError', key: 'percentageError' },
                                    ]}
                                    rowKey="actual"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Displaying Forecast Errors */}

        </div>
    );
};

export default Forecast;
