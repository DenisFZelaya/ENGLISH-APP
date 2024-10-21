import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { className } from '../utils/className';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Método que detecta errores en los componentes hijos
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Maneja más detalles del error
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // Aquí puedes enviar el error a un servicio de monitoreo o logging
    console.error("Error capturado por ErrorBoundary:", error, errorInfo);
  }

  // Restablece el estado de error para permitir un nuevo intento
  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Puedes personalizar este mensaje de error para que sea más útil
      return (
        <ScrollView style={className("bg-white")}>
          <View style={{ padding: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, color: 'red', marginBottom: 20 }}>
              Oops! Something went wrong.
            </Text>
            <Text>{JSON.stringify(this.state)}</Text>
            <Button title="Try Again" onPress={this.resetErrorBoundary} />
          </View>
        </ScrollView>
      );
    }

    // Si no hay errores, renderiza los hijos normalmente
    return this.props.children;
  }
}

export default ErrorBoundary;
