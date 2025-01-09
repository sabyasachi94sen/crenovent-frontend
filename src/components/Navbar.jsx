import React from "react";
import Link from "next/link";
import {Dropdown, Image} from 'antd'
import SvgIcon1 from "./icons/SvgIcon1";
import {data} from '@/utils/data'

export const Navbar = () => {
    const {Products}= data;

    const items = [
        {
            key: '1',
            label: (
                <div className="container-fluid p-4 menu">
                    <div>
                        <p className="h-16 regular txt-success">AI Sales Agent</p>
                        <div className="menu-list">
                            {Products?.map((d, i) =>
                                <div key={`${d?.heading}-${i}`} className="menu-list-items p-3">
                                    <div className="w-100 d-flex align-items-start gap-4">
                                        <div className="txt-success">{d?.icon}</div>
                                        <div className="">
                                            <div className="h-14 semibold lh-4">{d?.heading}</div>
                                            <div className="txt-secondary  h-12 regular mt-2">{d?.description}</div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="navbar container-fluid d-flex justify-content-between align-items-center gap-5">
            <Image preview={false} src="/icons/Logo.png" alt="crenovent-logo" width={80} />
            <div className="navbar-links d-flex justify-content-between gap-5">
            <Dropdown placement="bottom" menu={{ items }}>
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>Products</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
                </Dropdown>
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
            <div className="custom-btn custom-btn--success">Book now</div>
        </div>
    )
}