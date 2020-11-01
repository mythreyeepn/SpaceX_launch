import React from 'react';
import './ErrorView.css';

class ErrorView extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <div className="error"><h2>Something went wrong</h2></div>;
        }
        return this.props.children;
    }
}

export default ErrorView;