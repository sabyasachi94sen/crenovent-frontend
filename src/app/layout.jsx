'use client';
import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../components/ErrorBoundary';
import { AntdRegistry } from '@ant-design/nextjs-registry';
// import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ErrorBoundary>
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
