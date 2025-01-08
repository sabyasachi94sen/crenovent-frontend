'use client'
import React, { useRef, useState, useLayoutEffect } from "react";
import { Image } from 'antd'

export const ProblemSolved = () => {

    const [visible, setVisible] = useState(false)
    const ref = useRef(null);

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setVisible(true)
                }
            });
        });

        observer.observe(ref.current);
    }, [])


    return (
        <div ref={ref} className={`container-fluid mt-5 problems-solved ${visible && `fade-in`}`}>
            <p className="text-center h-46 semibold">Problems We Solve</p>
            <div className="row mt-5">
                <div className="col-lg-4 px-5">
                    <div className="d-flex flex-column gap-3">
                        <Image width={'100%'} preview={false} src="https://nobelbiz.com/wp-content/uploads/elementor/thumbs/AI-Lead-Generation-Featured-Image-01-q98xpqk2i38rd1ckz7dve381wpem3p4keeh9ree60w.png" alt="" />
                        <p className="h-22 bold mt-5">Lead Generation and Qualification</p>
                        <p className="h-16 regular txt-secondary lh-lg">AI agents analyze customer data to identify and qualify potential leads, ensuring sales teams focus on high-potential prospects.</p>
                        <p className="txt-danger h-12">Learn more <span>&#8594;</span></p>
                    </div>
                </div>
                <div className="col-lg-4 px-5">
                    <div className="d-flex flex-column gap-3">
                        <Image width={'100%'} preview={false} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFy_aDQ2kwmWmEzALUUOLyfYIpiq1QKY52w&s" alt="" />
                        <p className="h-22 bold mt-5">Sales Forecasting</p>
                        <p className="h-16 regular txt-secondary lh-lg">By analyzing historical data and market trends, AI agents provide accurate sales forecasts, aiding in strategic planning and resource allocation.</p>
                        <p className="txt-danger h-12">Learn more <span>&#8594;</span></p>
                    </div>
                </div>
                <div className="col-lg-4 px-5">
                    <div className="d-flex flex-column gap-3">
                        <Image width={'100%'}  preview={false} src="https://growthnatives.com/wp-content/uploads/2023/05/image-3-1.png" alt="" />
                        <p className="h-22 bold mt-5">Sales Automation</p>
                        <p className="h-16 regular txt-secondary lh-lg">
                        AI automates routine tasks such as scheduling meetings, sending follow-up emails, and updating CRM systems, allowing sales representatives to focus on strategic activities.
                        </p>
                        <p className="txt-danger h-12">Learn more <span>&#8594;</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}