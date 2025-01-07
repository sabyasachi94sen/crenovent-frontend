'use client'
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Result } from 'antd';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            errorInfo: errorInfo
        });
        // You can also log the error to a service like Sentry
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Result
                    status="500"
                    title="Something went wrong"
                    subTitle="Please try again later."
                />
            );
        }

        return this.props.children;
    }
}

// Add propTypes validation for children
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
};

export default ErrorBoundary;
