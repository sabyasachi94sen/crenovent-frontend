import React, { useLayoutEffect, useRef, useState } from "react";
import { Image } from "antd"
import { ExpandOutlined, MessageOutlined, PhoneOutlined, PieChartOutlined } from "@ant-design/icons"

export const ContactSolutions = () => {

   const [visible, setVisible] = useState(false)
    const ref = useRef(null);

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry?.isIntersecting)
                    setVisible(entry.isIntersecting)
            
            });
        });

        observer.observe(ref.current);
    }, [])

    return (
        <div className={`container-fluid mt-5  ${!visible && `is-visible`}`}>
        <div ref={ref} className={`row contact-solutions`}>
            <div className={`col-lg-6  ${visible && `transit-left`}`}>
                <Image preview={false} className="rounded" height={'100%'} width={'100%'} style={{ objectFit: 'cover' }}
                 src="https://cdn.prod.website-files.com/637a859303cd69910ffd02e5/669ea359d28f56a8eb3209fa_Copy%20of%201-%20Hero.png" alt='agent-icon' />
            </div>
            <div className={`col-lg-6 p-5 cp contact-solutions-services ${visible && `transit-right`}`}>
                <p className="txt-success h-46 semibold">Empowering Connections, Elevating Service</p>
                <p className="h-16 regular txt-secondary mt-3 lh-lg">Integrate with 30+ apps through our service</p>
                <div className="mt-5">
                    <>
                    <div className="contact-solutions-services__items d-flex align-items-start gap-3 mt-3">
                        <div className="rounded icon-wrapper rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <PhoneOutlined className='text-white fs-5' />
                        </div>
                        <div className="w-100">
                            <p className="txt-success h-16 regular"> AI-Powered Automation</p>
                            <p className="h-16 regular txt-secondary mt-3">Conversational AI chatbot to automate customers </p>
                        </div>
                    </div>
                    <div className="d-flex contact-solutions-services__items align-items-start gap-3 mt-3">
                        <div className="rounded icon-wrapper rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <MessageOutlined className='text-white fs-5' />
                        </div>
                        <div className="w-100">
                            <p className="txt-success h-16 regular">Omnichannel Support</p>
                            <p className="h-16 regular txt-secondary mt-3">Providing seamless customer experiences across various communication channels, including voice, chat, email, and social media.</p>
                        </div>
                    </div>
                    <div className="d-flex contact-solutions-services__items align-items-start gap-3 mt-3">
                        <div className="rounded icon-wrapper rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <PieChartOutlined className='text-white fs-5' />
                        </div>
                        <div className="w-100">
                            <p className="txt-success h-16 regular">Advanced Analytics</p>
                            <p className="h-16 regular txt-secondary mt-3">Utilizing data analytics to gain insights into customer behavior, preferences, and trends, facilitating informed decision-making.</p>
                        </div>
                    </div>
                    <div className="d-flex contact-solutions-services__items align-items-start gap-3 mt-3">
                        <div className="rounded icon-wrapper rounded-circle bg-success d-flex align-items-center justify-content-center">
                            <ExpandOutlined className='text-white fs-5' />
                        </div>
                        <div className="w-100">
                            <p className="txt-success h-16 regular">Scalability and Flexibility</p>
                            <p className="h-16 regular txt-secondary mt-3">Offering solutions that can easily scale and adapt to changing business needs, ensuring consistent service quality.</p>
                        </div>
                    </div>
                    </>
                </div>
            </div>

        </div>
        <div className="custom-btn custom-btn--success mx-auto mt-5">Explore our platform</div>
        </div>
    )
}