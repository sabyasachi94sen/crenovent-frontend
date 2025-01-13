'use client'
import { Tabs } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useEffect } from "react";


export const TabSlider = ({items}) => {
    useEffect(() => {
    })
    return (
        <>
            <Tabs
                defaultActiveKey="2"
                className="mt-5"
                items={
                    [...items || 0]?.map((d, i) => {
                        return {
                            key: i,
                            label: d?.label,
                            icon: d?.icon,
                            children: d?.children
                        };
                    }
                )}
            />
        </>
    )
}

TabSlider.propTypes={
    items: PropTypes?.array
}