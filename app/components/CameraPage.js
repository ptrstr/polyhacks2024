import { StyleSheet, View, Text } from 'react-native';

// Importe React depuis react-native
import React from 'react';
// Importe View depuis react-native
import { View } from 'react-native';
// Importe Appbar depuis la bibliothèque react-native-paper
import { Appbar } from 'react-native-paper';
// Importe le composant CameraComponent depuis le fichier CameraComponent.js
import CameraComponent from './CameraComponent';


export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Home!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

// Définit un composant fonctionnel CameraPage
const CameraPage = () => {
  // Rendu du composant
  return (
    <View style={{ flex: 1 }}>
      {/* Barre d'applications avec titre "Caméra" */}
      <Appbar.Header>
        <Appbar.Content title="Caméra" />
      </Appbar.Header>
      {/* Composant CameraComponent intégré dans la page */}
      <CameraComponent />
    </View>
  );
};

// Exporte le composant CameraPage
export default CameraPage;
