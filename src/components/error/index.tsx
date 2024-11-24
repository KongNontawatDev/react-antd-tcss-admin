import React, { Component } from 'react';
import { 
  useRouteError, 
  isRouteErrorResponse,
} from 'react-router-dom';
import ClientError from './ClientError';
import NotFoundError from './NotFoundError';
import ForbiddenError from './ForbiddenError';
import ServerError from './ServerError';


export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  error: Error | null;
}

export interface ErrorComponentProps {
  error?: Error | null;
}

class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { error } = this.state;
    
    if (error) {
      return <ClientError error={error} />;
    }

    return this.props.children;
  }
}

// ErrorBoundaryWrapper.tsx
export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryProps> = ({ 
  children 
}) => {
  
  const routeError = useRouteError();
  console.log('error ErrorBoundaryWrapper',routeError);
  
  if (routeError) {
    if (isRouteErrorResponse(routeError)) {
      switch (routeError.status) {
        case 404:
          return <NotFoundError />;
        case 403:
          return <ForbiddenError />;
        case 500:
          return <ServerError />;
        default:
          return <ClientError error={new Error(routeError.statusText)} />;
      }
    }
    return <ClientError error={routeError instanceof Error ? routeError : undefined} />;
  }

  return (
    <ErrorBoundaryClass>
      {children}
    </ErrorBoundaryClass>
  );
};