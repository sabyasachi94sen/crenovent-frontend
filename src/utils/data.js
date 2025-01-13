import React from "react";
import { AudioOutlined, AuditOutlined, BarChartOutlined, ClusterOutlined, LineChartOutlined, MergeOutlined, NodeIndexOutlined, ProductOutlined, RobotOutlined, TagOutlined, UserOutlined } from "@ant-design/icons";
import { TabItems } from "@/components/TabItems";
import { ErrorPage } from "@/app/common/404Page";


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
  "About": [
    {
      icon: <UserOutlined className='h-26 regular' />,
      heading: "Contact Us",
      url: '/contact',
      description: 'Contact the AI Innovators'
  },
  ],

  "Products":[
    {
      icon: <RobotOutlined className='h-26 regular' />,
      heading: "GTM Engineer",
      url: '/products/gtm-engineer',
      description: 'Empowering Sales Teams with Cutting-Edge AI Solutions to Drive Business Growth and Innovation.'
  },
      {
          icon: <AudioOutlined className='h-26 regular' />,
          heading: 'RPA',
          url: '/products/rpa',
          description: 'Efficient amplified through automation'
      },
      {
          icon: <ClusterOutlined className='h-26 regular' />,
          heading: 'Analyse AI',
          url: '/products/analyse-ai',
          description: 'Power your analytics strategy'
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
            label: "GTM agents",
            children:<TabItems 
            items={{
            tabReview: {
              title: 'The Backbone of GTM Automation',
              desc: 'Unlock new levels of efficiency and personalization with our intelligent Autonomous Agents',
              btnTitle: 'See GTM Engineer in action',
              img_url: 'https://www.salesfocusinc.com/wp-content/uploads/2019/01/agent.jpg'
            },
            tabBlogs: {
              title1:'How do GTM Engineer Work?',
              desc1: 'The GTM Engineer work by leveraging machine learning algorithms to analyze customer data, understand the context of customer queries, and provide insight-driven resolutions. They learn from the interaction history, customer data, and agent feedback to deliver personalized and empathetic support to customers. As they continue to learn, their effectiveness improves, leading to higher customer satisfaction and improved first contact resolution rates.',
              img_url1: 'https://synergetics.ai/wp-content/uploads/2024/08/The-Evolution-of-AI-Introducing-Autonomous-AI-Agents-_3-3.jpg',

              title2: 'Why do you Need GTM Engineer?',
              desc2: 'GTM Engineer provide businesses with valuable insights into contact center operations, enabling businesses to identify trends, optimize workflows, and continuously improve their operations. By leveraging these insights, businesses can drive efficiency, boost agent performance, and deliver exceptional customer experiences.',
              img_url2: 'https://shelf.io/wp-content/uploads/2024/10/image-9.png',
            },
             tabGraphs: {
              title: 'Traditional GTM Engineer Service',
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
                { year: '1999', value: 4 },
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
          // { icon: <RobotOutlined />, label: "RPA",children:<ErrorPage /> },
          { icon: <LineChartOutlined />, label: 'Intelligent Routing Engine',children: <ErrorPage /> },
          { icon: <BarChartOutlined />, label: 'Real Time Data Analytics',children: <ErrorPage /> }]
      }
    }

    ,
    "rpa": {
      heroReview: {
        title: 'RPA',
        desc: 'Experience the power of RPA with our intelligent Autonomous Agents, automate repetitive tasks with RPA, ensure seamless customer connections with our Intelligent Routing Engine, and gain actionable insights in real-time with our robust analytics capabilities.',
        btnTitle: 'Schedule a free consultation Now',
        img_url: 'https://nix-united.com/wp-content/uploads/2019/10/1_3.jpg'
      },

      heroBlogs: {
        tabs: [
          { 
            icon: <UserOutlined />,
            label: "Ui.Vision RPA",
            children:<TabItems 
            items={{
            tabReview: {
              title: 'Ui.Vision RPA',
              desc: 'Ui.Vision RPA is a cross-platform desktop automation tool that utilizes image and text recognition for automating tasks. It supports running multiple automation scripts simultaneously across different tabs or windows. For instance, you can execute two automation tasks in separate browser tabs by using different Chrome profiles, each running an instance of the Ui.Vision extension',
              btnTitle: 'See RPA in action',
              img_url: 'https://img.freepik.com/premium-vector/rpa-robotic-process-automation-concept-artificial-intelligence-future-technology_108231-1252.jpg'
            },
            tabBlogs: {
              title1:'Automation Anywhere',
              desc1: 'Automation Anywhere is a leading RPA platform that offers a comprehensive suite of tools for automating business processes. While it provides a user-friendly interface for designing and managing automation workflows, the specific implementation of tabbed navigation within the platform may vary. It"s advisable to consult the official documentation or support resources for detailed guidance on utilizing tabbed interfaces in Automation Anywhere',
              img_url1: 'https://media.licdn.com/dms/image/v2/D5612AQG8KD5Wxzuzaw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709059000821?e=2147483647&v=beta&t=O_dWs0mQpARuu967eoNwwCuRgv-I6HiozbrCGXeLJOQ',

              title2: 'Pega RPA',
              desc2: 'Pega RPA offers unattended automation bots designed to integrate with legacy systems and facilitate digital transformation. The platform emphasizes optimizing robot resources through features like auto-balancing. While Pega RPA provides robust automation capabilities, the implementation of tabbed navigation within its interface may differ. For specific details on utilizing tabbed interfaces in Pega RPA, refer to their official resources.',
              img_url2: 'https://static.webuters.com/2022/05/Rpa-companies.png',
            },
             tabGraphs: {
              title: 'Traditional RPA Service',
              config : {
               data: [
                { year: '1991', value: 8 },
                { year: '1992', value: 7 },
                { year: '1993', value: 3.5 },
                { year: '1994', value: 4 },
                { year: '1995', value: 8 },
                { year: '1996', value: 6 },
                { year: '1997', value: 7 },
                { year: '1998', value: 9 },
                { year: '1999', value: 8 },
              ]
              ,
               title: {
                   visible: true,
                   text : 'Traditional RPA Service' , 
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
          { icon: <RobotOutlined />, label: "Autonomous RPA",children: <ErrorPage /> },
          { icon: <LineChartOutlined />, label: 'Intelligent RPA Engine',children: <ErrorPage /> },
          { icon: <BarChartOutlined />, label: 'Real Time RPA Analytics',children: <ErrorPage /> }]
      }
    },


    "analyse-ai": {
      heroReview: {
        title: 'Analyse AI:  Unlock Insights from Every Interaction',
        desc: 'At Crenovent, we understand the value of every interaction in your contact center, hence, we developed Analyse AI, a powerful solution that helps you extract valuable contact center reporting and analytics from every agent-customer interaction.',
        btnTitle: 'Schedule a free consultation Now',
        img_url: 'https://cdn.prod.website-files.com/61488f4f65be16b5ebbd450b/65ccf42e1bc4edaaa73e72c5_15.webp'
      },
      heroBlogs: {
        tabs: [
          { 
            icon: <TagOutlined />,
            label: "Auto-Tagging",
            children:<TabItems 
            items={{
            tabReview: {
              title: 'Analyze Customer Conversations to gain in-depth Insights',
              desc: 'Our advanced STT capabilities ensure precise conversion of agent-customer conversations into text, making it easier for you to analyze and understand the context of each interaction, allowing you to enhance products and services based on call center efficiency metrics.',
              btnTitle: 'Analyse AI in action',
              img_url: 'https://getthematic.com/insights/content/images/2024/07/20240712-BLOG---How-conversational-analytics-works---Metrics.png'
            },
            tabBlogs: {
              title1:'Understand Customer Preferences with Automated Tagging',
              desc1: 'With automated tagging, you can categorize conversations based on predefined criteria, empowering you to effortlessly track relevant topics, identify trends, and gain actionable insights on consumer decision journey.',
              img_url1: 'https://cdn.martech.zone/wp-content/uploads/2023/04/auto-tagging-process-1000x563.jpg',

              title2: 'Streamline Contact Center Performance with Strategic Decision-making',
              desc2: 'Our SOP-driven audits enable you to evaluate agent adherence to standard operating procedures, ensuring consistency and compliance. This allows you to proactively identify improvement areas and provide targeted coaching to enhance agent performance with customer journey analytics data.',
              img_url2: 'https://www.qualtrics.com/m/assets/wp-content/uploads/2023/07/automated-call-summary-e1689004456974.webp',
            },
             tabGraphs: {
              title: 'Traditional SAAS Service',
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
                { year: '1999', value: 1 },
              ]
              ,
               title: {
                   visible: true,
                   text : 'Traditional SAAS Service' , 
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
          // { icon: <TagOutlined />, label: "Auto-Tagging",children:<ErrorPage /> },
          { icon: <AuditOutlined />, label: 'SOP Audits',children: <ErrorPage /> }],
      }
    }

      
  }
}