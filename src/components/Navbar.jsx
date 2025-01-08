import React from "react";
import Link from "next/link";
import SvgIcon1 from "./icons/SvgIcon1";

export const Navbar = () => {
    return (
        <div className="navbar container-fluid px-5 d-flex justify-content-between align-items-center gap-5">
            <img src="/icons/Logo.png" alt="crenovent-logo" width={80} />
            <div className="navbar-links d-flex justify-content-between gap-5">
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>Products</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>Industries</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>Solutions</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>About</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
            </div>
            <div className="custom-btn custom-btn--danger">Login</div>
        </div>
    )
}