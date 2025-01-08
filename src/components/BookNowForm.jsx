

import React from "react";
import { Form, Input} from "antd";

 export const BookNowForm = () => {
    const handleSubmit = () => {

    }
    return (
        <div className="col-8">
        <Form layout="vertical" scrollToFirstError={true} onSubmit={handleSubmit}>
            <div className="d-flex gap-3 flex-wrap">
            <Form.Item  name='name' label="Name" rules={[{ required: true, message: 'Please input your name!' }]} >
                <Input
                  width={'100%'}
                  placeholder="Enter your name"
                />
            </Form.Item>
            <Form.Item name='phone' label="Mobile" rules={[{ required: true, message: 'Please input your mobile!',type:'number' }]}>
                <Input
                    type="number"
                    placeholder="Enter your Mobile"
                    onInput={(e)=>e.target.value=e.target.value.slice(0,10)}
                />
            </Form.Item>
            <Form.Item name='email' label="Email" rules={[{ required: true, message: 'Please input your email!',type:'email' }]}>
                <Input
                    type="email"
                    placeholder="Enter your email"
                />
            </Form.Item>
            </div>
            <Form.Item>
                <button type="primary" className='custom-btn custom-btn--danger'>
                    Register
                </button>
            </Form.Item>
        </Form>
        </div>
    )
}

