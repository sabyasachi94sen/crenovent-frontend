'use client'

import React, { useEffect } from "react";
import { Image } from 'antd'
import { BookNowForm } from "./BookNowForm";

export const ProfileView = () => {


    useEffect(() => {
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const calls = document.getElementById("calls");
        const languages=document.getElementById("languages");
        animateValue(calls, 0, 96, 1000);
        animateValue(languages, 0, 16, 1000);
        
    }, [])


    return (
        <div className="row pt-5 fade-in">
            <div className="col-lg-6 profile-view">
                <p className="txt-danger h-46 semibold">Leading the Future of Sales with AI Expertise</p>
                <p className="h-26 bold">Transforming Customer Service through Data Excellence</p>
                <p className="h-16 regular txt-secondary mt-4 lh-lg">Don’t let inadequate resources and missed opportunities hinder  your contact center operations and customer experience
                    Drive maximum potential of your business</p>
                <BookNowForm />
                <div className="mt-5 d-flex gap-5 flex-wrap">
                    <div>
                        <span className="h-46 semibold"><span id='calls'>0</span>Mn</span>
                        <div className="h-16 regular txt-secondary mt-1" >
                            Calls Handled by AI Agents/Month
                        </div>
                    </div>
                    <div>
                        <span className="h-46 semibold"><span id='languages'>0</span>+</span>
                        <div className="h-16 regular txt-secondary mt-1" >
                        Languages Supported
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 profile-view">
                <Image preview={false} width={'100%'} src="/img/chatbox.webp" alt="chatbox" />
            </div>
        </div>
    )
}

