'use client';
import React from "react";
import { TabSlider } from "@/app/common/TabSlider"
import { Image } from "antd"
import PropTypes from "prop-types";

export const ProductItems = ({items}) => {
 
    const {heroReview}=items
    const {title:heroTitle,desc:heroDesc,btnTitle:heroBtnTitle,img_url:heroImgUrl}=heroReview;
    const {heroBlogs}=items;


    return (
        <div className="container-fluid fade-in">
            <div className="row">
                <div className='col-lg-6 mb-5'>
                    <p className="txt-success h-46 semibold">{heroTitle}</p>
                    <p className="h-16 regular txt-secondary mt-4 lh-lg">
                        {heroDesc}
                    </p>
                    <div className="custom-btn custom-btn--success">{heroBtnTitle}</div>
                </div>
                <div className='col-lg-6'>
                    <Image 
                     height={'500px'} 
                     width={'100%'} 
                     style={{ objectFit: 'cover' }}
                     className="rounded" 
                     preview={false}
                     src={heroImgUrl}
                     />
                </div>
            </div>
            <TabSlider items={heroBlogs?.tabs} />
        </div>
    )
}

ProductItems.propTypes={
    items: PropTypes?.array,
    heroReview: PropTypes?.object,
    heroBlogs: PropTypes?.object
}