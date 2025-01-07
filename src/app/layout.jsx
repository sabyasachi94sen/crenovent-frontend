'use client';
import React from "react";
import PropTypes from "prop-types";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
RootLayout.propTypes = {
  children: PropTypes.node.isRequired, // Ensure children is a node and is required
};