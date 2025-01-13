import React from "react"
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"

export const ContactUs = () => {
    return (
        <div className="container-fluid mb-5 fade-in">
            <h2 className="h-31 bold txt-success">Send Us A Message </h2>
            <div className="px-0 container-fluid d-flex justfiy-content-center mt-4 align-items-center w-100%">
                {/* <span className="big-circle"></span> */}
                <img src="img/shape.png" className="square" alt="" />
                <div className="form w-100">
                    <div className="contact-info">
                        <h3 className="title">Let&apos;s get in touch</h3>
                        <div className="info">
                            <div className="information">
                                <i className="fas fa-map-marker-alt"></i>

                                <p>E-Square, Plot No. C2, Sector 96, Noida, Uttar Pradesh 201303</p>
                            </div>
                            <div className="information">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:ks@crenovent.com">ks@crenovent.com</a>
                            </div>
                            <div className="information">
                                <i className="fas fa-phone"></i>
                                <a href="tel:">+91-98187008549</a>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="d-flex justify-start gap-2">
                                <FacebookOutlined className='h-26 regular cp' />
                                <TwitterOutlined className='h-26 regular cp' />
                                <InstagramOutlined className='h-26 regular cp' />
                                <LinkedinOutlined className='h-26 regular cp' />
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form autoComplete="off">
                            <h3 className="title">Contact us</h3>
                            <div className="input-container">
                                <input placeholder="Username" type="text" name="name" className="input" />
                                <span>Username</span>
                            </div>
                            <div className="input-container">
                                <input placeholder="Email" type="email" name="email" className="input" />
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input placeholder="Phone" type="tel" name="phone" className="input" />
                                <span>Phone</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea placeholder="Message" name="message" className="input"></textarea>
                                <span>Message</span>
                            </div>
                            <button type="button" className="custom-btn custom-btn--white">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}