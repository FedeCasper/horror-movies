import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', color: 'white', backgroundColor: '#000' }}>
          <h1>⚠️ Error en la aplicación</h1>
          <p>Algo salió mal. Intenta recargar la página.</p>
          <button 
            onClick={() => window.location.href = window.location.origin + '/horror-movies/#/'}
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Ir al inicio
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
