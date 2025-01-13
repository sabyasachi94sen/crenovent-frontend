import React from "react";
import { BarChartOutlined, ClusterOutlined, HeartOutlined, LineChartOutlined, MergeOutlined, NodeIndexOutlined, ProductOutlined, RobotOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { TabItems } from "@/components/TabItems";


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
      heading: "GTM Engineer",
      url: '/products/gtm-engineer',
      description: 'Empowering Sales Teams with Cutting-Edge AI Solutions to Drive Business Growth and Innovation."'
  },
      {
          icon: <SearchOutlined className='h-26 regular' />,
          heading: 'Enterprise Search',
          url: '/',
          description: 'Find right information at the right time,every time'
      },
      {
          icon: <HeartOutlined className='h-26 regular' />,
          heading: 'Personalization',
          url: '/',
          description: 'Give your responses a WOW factor with easy personalisation'
      },

  ],

  "productList": {
    "gtm-engineer": {
      heroReview: {
        title: 'GTM Engineer',
        desc: 'Experience the power of GTM AI with our intelligent Autonomous Agents, automate repetitive tasks with RPA, ensure seamless customer connections with our Intelligent Routing Engine, and gain actionable insights in real-time with our robust analytics capabilities.',
        btnTitle: 'Schedule a free consultation Now',
        img_url: 'https://sapphireventures.com/wp-content/uploads/2024/05/DALL%C2%B7E-2024-05-28-15.00.21-An-abstract-and-futuristic-representation-of-generative-AI-app-technology-for-a-blog-post-titled-Building-the-Future_-A-Deep-Dive-Into-the-Generative.webp'
      },
      heroBlogs: {
        tabs: [
          { 
            icon: <UserOutlined />,
            label: "Autonomous agents",
            children:<TabItems 
            items={{
            tabReview: {
              title: 'The Backbone of GTM Automation',
              desc: 'Unlock new levels of efficiency and personalization with our intelligent Autonomous Agents',
              btnTitle: 'See GTM Engineer in actio',
              img_url: 'https://www.salesfocusinc.com/wp-content/uploads/2019/01/agent.jpg'
            },
            tabBlogs: {
              title1:'How do Autonomous Agents Work?',
              desc1: 'The Autonomous agents work by leveraging machine learning algorithms to analyze customer data, understand the context of customer queries, and provide insight-driven resolutions. They learn from the interaction history, customer data, and agent feedback to deliver personalized and empathetic support to customers. As they continue to learn, their effectiveness improves, leading to higher customer satisfaction and improved first contact resolution rates.',
              img_url1: 'https://synergetics.ai/wp-content/uploads/2024/08/The-Evolution-of-AI-Introducing-Autonomous-AI-Agents-_3-3.jpg',

              title2: 'Why do you Need Autonomous Agents?',
              desc2: 'Autonomous agents provide businesses with valuable insights into contact center operations, enabling businesses to identify trends, optimize workflows, and continuously improve their operations. By leveraging these insights, businesses can drive efficiency, boost agent performance, and deliver exceptional customer experiences.',
              img_url2: 'https://shelf.io/wp-content/uploads/2024/10/image-9.png',
            },
             tabGraphs: {
              title: 'Traditional Customer Service',
              config : {
               data: [
                { year: '1991', value: 3 },
                { year: '1992', value: 4 },
                { year: '1993', value: 3.5 },
                { year: '1994', value: 5 },
                { year: '1995', value: 4.9 },
                { year: '1996', value: 6 },
                { year: '1997', value: 7 },
                { year: '1998', value: 9 },
                { year: '1999', value: 13 },
              ]
              ,
               title: {
                   visible: true,
                   text : 'Traditional Customer Service' , 
                 },
                 point: {
                   visible:true, 
                   size: 5,
                   shape: 'diamond',
                   style: {
                     fill: 'white',
                     stroke: '#2593fc',
                     lineWidth: 2,
                   },
                 },
               xField: 'year',
               yField: 'value',
             }

            }
          }}
          
          /> },
          { icon: <RobotOutlined />, label: "RPA",children: 'No data found!' },
          { icon: <LineChartOutlined />, label: 'Intelligent Routing Engine',children: 'No data found!' },
          { icon: <BarChartOutlined />, label: 'Real Time Data Analytics',children: 'No data found!' }]
      }
    }
      
  }
}