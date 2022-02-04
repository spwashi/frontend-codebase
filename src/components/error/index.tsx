import React from 'react';

export class ErrorBoundary extends React.Component {
    state = {hasError: false};

    constructor(props: any) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: any) { return {hasError: true}; }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <strong>Something went wrong.</strong>;
        }

        return this.props.children;
    }
}