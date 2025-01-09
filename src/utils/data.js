import React from "react";
import { ClusterOutlined, HeartOutlined, MergeOutlined, NodeIndexOutlined, ProductOutlined, RobotOutlined, SearchOutlined } from "@ant-design/icons";

export const data={
  "technologies": [
    {
      "key": "1",
      "label": <span className="h-16 semibold txt-success d-flex gap-3 align-items-center"><ClusterOutlined className='fs-4' />Natural Language Processing</span>,
      "children": <p className="h-16 regular txt-secondary lh-lg">Our conversational ai platform accurately understands and interprets customer queries and responses for personalized and contextually relevant interactions</p>
    },
    {
      "key": "2",
      "label": <span className="h-16 semibold txt-success d-flex gap-3 align-items-center"><MergeOutlined className='fs-4' />ML Models & LLMs</span>,
      "children": <p className="h-16 regular txt-secondary lh-lg">Deep integration with Language and Linguistic Models to enhance conversation understanding and improve call summarization.</p>
    },
    {
      "key": "3",
      "label": <span className="h-16 semibold txt-success d-flex gap-3 align-items-center"><NodeIndexOutlined className='fs-4' />CCI Integrations</span>,
      "children": <p className="h-16 regular txt-secondary lh-lg">Seamless integration with CRM and other Customer Contact Information systems for efficient data exchange and updates.</p>
    },
    {
      "key": "4",
      "label": <span className="h-16 semibold txt-success d-flex gap-3 align-items-center"><ProductOutlined className='fs-4' />Cloud Infrastructure & Microservice Architecture</span>,
      "children": <p className="h-16 regular txt-secondary lh-lg">Gain the computing power necessary to handle your exponentially growing customers in an ever changing business environment</p>
    }

  ],

  "Products":[
    {
      icon: <RobotOutlined className='h-26 regular' />,
      heading: 'GTM Engineer',
      description: 'Empowering Sales Teams with Cutting-Edge AI Solutions to Drive Business Growth and Innovation."'
  },
      {
          icon: <SearchOutlined className='h-26 regular' />,
          heading: 'Enterprise Search',
          description: 'Find right information at the right time,every time'
      },
      {
          icon: <HeartOutlined className='h-26 regular' />,
          heading: 'Personalization',
          description: 'Give your responses a WOW factor with easy personalisation'
      },

  ]
}