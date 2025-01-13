'use client';
import Link from "next/link";
import React from "react";

export const ErrorPage = () => {

    return (
        <>
            <section className="page_404 w-100">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-sm-12 d-flex justify-content-center align-items-center">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">Oops 404!</h1>
                                </div>
                                <div className="contant_box_404 mt-4">
                                    <h3 className="h-31 txt-success semibold">
                                        404 Page not found!
                                    </h3>
                                    <p className="h-14 regular">the page you are looking for not avaible!</p>
                                    <Link href='/'><button type='button' className="custom-btn custom-btn--success">Go to Home</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}