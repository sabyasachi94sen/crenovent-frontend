'use client';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/ErrorBoundary';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import NextTopLoader from 'nextjs-toploader';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.scss';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ErrorBoundary>
            <NextTopLoader />
            <Navbar />
            <div className='container mb-5 mt-5 pb-5'>
                {children}
            </div>
            <Footer />
          </ErrorBoundary>
        </AntdRegistry>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a node and is required
};
