import React from "react";
import Link from "next/link";
import {Dropdown, Image} from 'antd'
import SvgIcon1 from "./icons/SvgIcon1";
import {data} from '@/utils/data'

export const Navbar = () => {
    const {Products,About}= data;

    const fetchItems=(list,title)=>{
        return [
            {
            key: '1',
            label: (
                <div className="container-fluid p-4 menu">
                    <div>
                        <p className="h-16 regular txt-success">{title}</p>
                        <div className="menu-list">
                            {list?.map((d, i) =>
                            <Link key={i} href={d?.url}>
                                <div key={`${d?.heading}-${i}`} className="menu-list-items p-3">
                                    <div className="w-100 d-flex align-items-start gap-4">
                                        <div className="txt-success">{d?.icon}</div>
                                        <div className="">
                                            <div className="h-14 semibold lh-4">{d?.heading}</div>
                                            <div className="txt-secondary  h-12 regular mt-2">{d?.description}</div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                                )}
                        </div>
                    </div>
                </div>
            ),
        },
    ]
    }

    const productList=fetchItems(Products,"Products")
    const AboutList=fetchItems(About,"Let's get in touch")

    // const items = [
       
    // ];
    return (
        <div className="navbar container-fluid d-flex justify-content-between align-items-center gap-5">
            <Link href="/" className="cp"><Image preview={false} src="/icons/Logo.png" alt="crenovent-logo" width={80} /></Link>
            <div className="navbar-links d-flex justify-content-between gap-5">
            <Dropdown placement="bottom" menu={{ items:productList }}>
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
                <Dropdown placement="bottom" menu={{ items:AboutList }}>
                <div className="d-flex align-items-center gap-2 navbar-links-items">
                    <Link href="/" className='h-16 regular'>About</Link>
                    <SvgIcon1 className={'svg-container'} />
                </div>
                </Dropdown>
            </div>
            <div className="custom-btn custom-btn--success">Book now</div>
        </div>
    )
}