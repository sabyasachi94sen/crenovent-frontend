'use client';
import React from "react";
import { useEffect, useState } from "react";

export const GTMGraphics = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true)
        }, 100)

        return () => clearTimeout(timeout)
    }, [])


    return (
        <div className="venn-container container-fluid">
            <div className="row h-100">
                <div className="col-lg-7 px-md-5">
                    <div className="venn-diagrams px-md-4">
                        <div className="circles">
                            <span className={`${visible && 'opacity-1'}`}>{'Sales Engineer'}</span>
                        </div>
                        <div className="circles">
                            <span className={`${visible && 'opacity-1'}`}>{'Account Engineer'}</span>
                        </div>
                        <div className="circles">
                            <span className={`${visible && 'opacity-1'} gtm`}>GTM Engineer</span>
                            <span className={`${visible && 'opacity-1'}`}>{'SDR'}</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end justify-content-end justify-content-xl-start">
                    <div className="revops-circle fade-in">Revops</div>
                </div>
            </div>
        </div>
    )
}