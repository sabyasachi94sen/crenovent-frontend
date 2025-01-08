

import React from "react";
import { Form, Input } from "antd";

export const BookNowForm = () => {
    const handleSubmit = (val) => {
        console.log(val, 'val');


    }
    return (
        <Form layout="vertical" scrollToFirstError={true} onFinish={handleSubmit}>
            <div className="row">
                <div className="col-lg-4">
                    <Form.Item name='name' label="Name" rules={[{ required: true, message: 'Please input your name!' }]} >
                        <Input
                            width={'100%'}
                            placeholder="Enter your name"
                        />
                    </Form.Item>
                </div>
                <div className="col-lg-4">
                    <Form.Item name='phone' label="Mobile" rules={[{ required: true, message: 'Please input your mobile!' }]}>
                        <Input
                            type="number"
                            placeholder="Enter your Mobile"
                            onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                        />
                    </Form.Item>
                </div>
                <div className="col-lg-4">
                    <Form.Item name='email' label="Email" rules={[{ required: true, message: 'Please input your email!' },

                    () => ({
                        validator(rule, value, callback) {
                            console.log(rule,callback)
                            
                            if (!value) {
                                return Promise.resolve();
                            }
                            if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) {
                                return Promise.reject("Please input a valid email!");
                            }
                            return Promise.resolve();
                        }
                    })

                    ]}>
                        <Input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </Form.Item>
                </div>
            </div>
            <Form.Item>
                <button type="primary" className='custom-btn custom-btn--success'>
                    Register
                </button>
            </Form.Item>
        </Form>
    )
}

