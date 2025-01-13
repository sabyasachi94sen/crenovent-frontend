'use client'
import React, { useLayoutEffect, useRef, useState } from "react";
import { Image } from "antd";
import { Line } from '@ant-design/charts';
import PropTypes from "prop-types";

export const TabItems = ({ items }) => {

    const [visible, setVisible] = useState(false)
    const ref = useRef(null);

    const {tabGraphs,tabReview,tabBlogs}=items;
          
    const {title:graphTitle,config:graphConfig}=tabGraphs
    const { title: reviewTitle, desc: reviewDesc, btnTitle: reviewBtnTitle, img_url: reviewImgUrl } = tabReview;
    const { title1: blogsTitle1, desc1: blogsDesc1, img_url1: blogUrl1, title2: blogsTitle2, desc2: blogsDesc2, img_url2: blogUrl2 } = tabBlogs;

   console.log(graphConfig);
   

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry?.isIntersecting)
                    setVisible(entry.isIntersecting)

            });
        });

        observer.observe(ref.current);
    }, [])
 
    

    return (
        <div className={`container mt-5`}>
            <div className="row">
                <div className="col-lg-6 position-relative mb-5 md-lg-none-5">
                    <Image
                        height={'100%'}
                        width={'100%'}
                        style={{ objectFit: 'cover' }}
                        preview={false}
                        className="rounded"
                        src={reviewImgUrl}
                        alt='sales-agent-image'
                    />
                </div>
                <div className="col-lg-6 p-lg-5">
                    <p className="txt-success h-46 semibold">{reviewTitle}</p>
                    <p className="h-16 regular txt-secondary mt-4 lh-lg">
                        {reviewDesc}
                    </p>
                    <div className="custom-btn custom-btn--success">{reviewBtnTitle}</div>
                </div>
            </div>
            <div ref={ref} className={`container-fluid mt-5`}>
                <div className="row">
                    <div className="col-lg-6 p-lg-5 mb-5 md-lg-none-5">
                        <p className="h-46 semibold">{blogsTitle1}</p>
                        <p className="h-16 regular txt-second ary lh-lg">
                            {blogsDesc1}
                        </p>
                        <p className="txt-success h-16 regular cp">Schedule Demo <span>&#8594;</span></p>
                    </div>
                    <div className="col-lg-6">
                        <Image
                            preview={false}
                            className={`rounded  ${visible && `transit-right`}`}
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: 'cover' }}
                            src={blogUrl1}
                            alt='sales-agent-image'
                        />
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col-lg-6">
                        <Image
                            preview={false}
                            className={`rounded  ${visible && `transit-left`}`}
                            width={'100%'}
                            height={'100%'}
                            style={{ objectFit: 'cover' }}
                            src={blogUrl2}
                            alt='sales-agent-image'
                        />
                    </div>
                    <div className="col-lg-6 p-lg-5 mb-5 md-lg-none-5">
                        <p className="h-46 semibold mt-5">{blogsTitle2}</p>
                        <p className="h-16 regular txt-secondary lh-lg">
                         {blogsDesc2}
                        </p>
                        <p className="txt-success h-16 regular cp">Schedule Demo <span>&#8594;</span></p>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <p className="txt-success h-46 semibold">{graphTitle}</p>
                <Line {...graphConfig} />
            </div>
        </div>
    )
}


TabItems.propTypes={
    tabGraphs: PropTypes?.object,
    tabReview: PropTypes?.object,
    tabBlogs: PropTypes?.object,
    items: PropTypes?.object
}