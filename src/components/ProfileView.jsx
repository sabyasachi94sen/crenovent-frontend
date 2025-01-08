'use client'

import React from "react";
import {Image} from 'antd'
import {BookNowForm} from "./BookNowForm";

export const ProfileView=()=>{
    return (
        <div className="row pt-5 fade-in">
        <div className="col-lg-6 profile-view">
            <p className="txt-danger h-46 semibold">Leading the Future of Sales with AI Expertise</p>
            <p className="h-26 bold">Transforming Customer Service through Data Excellence</p>
            <p className="h-16 regular txt-secondary mt-4 lh-lg">Don’t let inadequate resources and missed opportunities hinder  your contact center operations and customer experience
            Drive maximum potential of your business</p>
            <BookNowForm />
        </div>
        <div className="col-lg-6 profile-view">
            <Image preview={false} width={'100%'} src="/img/chatbox.webp" alt="chatbox" />
        </div>
        </div>
    )
}

