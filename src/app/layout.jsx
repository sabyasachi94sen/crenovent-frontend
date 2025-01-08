'use client';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/ErrorBoundary';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Navbar } from '@/components/Navbar';
// import NextTopLoader from 'nextjs-toploader';
import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.scss';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ErrorBoundary>
            <Navbar />
            {children}
          </ErrorBoundary>
        </AntdRegistry>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a node and is required
};
