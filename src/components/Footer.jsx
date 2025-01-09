import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
import React from "react";

export const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="footer-wrapper container pb-5">
                <div className="row footer-list mx-auto">
                    <div className="col-md-2 mb-4">
                        <div className="">
                            <img src='/icons/Logo.png' width={80} alt='logo' />
                            <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
                                <FacebookOutlined className='fs-5 cp' />
                                <TwitterOutlined className='fs-5 cp' />
                                <InstagramOutlined className='fs-5 cp' />
                                <LinkedinOutlined className='fs-5 cp' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="text-200 bold footer-title">Platform</div>
                                <div className="footer-list-container">
                                    <ul role="list" className="footer-list-wrapper">
                                        <li className="footer-list-item"><a href="#" className="footer-link">Connectors</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Analytics</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Trust center</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="text-200 bold footer-title">Product</div>
                                <div className="footer-list-container">
                                    <ul role="list" className="footer-list-wrapper">
                                        <li className="footer-list-item"><a href="#" className="footer-link">Response generation</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Enterprise search</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Personalization</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">SiftAI</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Project management</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Smart repository</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6" >
                                <div className="text-200 bold footer-title">Solutions</div>
                                <div className="footer-list-container">
                                    <ul role="list" className="footer-list-wrapper">
                                        <li className="footer-list-item"><a href="#" className="footer-link">Narratives</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">RFPs &amp; RFIs</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Security questionnaires</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Email &amp; On-call queries</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Sales teams</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Presales &amp; Solutions teams</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Bid &amp; Proposal teams</a></li>
                                        <li className="footer-list-item"><a href="#" className="footer-link">Information Security teams</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="text-200 bold footer-title">Resources</div>
                                <ul role="list" className="footer-list-wrapper">
                                    <li className="footer-list-item"><a href="#" className="footer-link">Blog</a></li>
                                    <li className="footer-list-item"><a href="#" className="footer-link">Podcast</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 p-3">
                                <div className="text-200 bold footer-title">Company</div>
                                <ul role="list" className="footer-list-wrapper">
                                    <li className="footer-list-item"><a href="#" className="footer-link">About us</a></li>
                                    <li className="footer-list-item"><a href="#" className="footer-link">Careers</a></li>
                                    <li className="footer-list-item"><a href="#" className="footer-link">Book a demo</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>
                <div className="row mx-auto mt-5">
                    <div className="col-md-5 txt-secondary h-16 regular mb-4">
                    © 2025 Crenovent. All rights reserved.
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex gap-4 flex-wrap">
                            <div className="txt-secondary h-16 regular hover-danger cp">Contact Us</div>
                            <div className="txt-secondary h-16 regular hover-danger cp">Terms & Conditions</div>
                            <div className="txt-secondary h-16 regular hover-danger cp">Privacy Policy</div>
                            <div className="txt-secondary h-16 regular hover-danger cp">Trust & Compliance</div>
                            <div className="txt-secondary h-16 regular hover-danger cp">VDP</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}