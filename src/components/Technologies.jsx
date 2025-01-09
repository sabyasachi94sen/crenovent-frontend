import React, { useLayoutEffect, useRef, useState } from "react";
import { Collapse } from "antd";
import {data} from "@/utils/data"

export const Technology=()=>{

    const {technologies:items}=data;

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
        <div ref={ref} className={`container-fluid mt-5  ${!visible && `is-visible`}`}>
            <div className="row">
            <div className={`col-lg-6 p-5  ${visible && `transit-left`}`}>
                <p className="h-46 semibold">Our Advanced AI Lab at your doorstep</p>
                <p className="h-16 regular txt-secondary mt-3 lh-lg">Harnessing the Power of Advanced AI Technologies to Bring you the Best Solutions</p>
                <div className="custom-btn custom-btn--success mt-5">Explore our autonomous agents</div>
                </div>
                <div className={`col-lg-6 p-5 ${visible && `transit-right`}`}>
                <Collapse items={items} defaultActiveKey={['1']} />
                </div>
            </div>
        </div>
    )
}