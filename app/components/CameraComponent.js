// Importe React et la fonction useRef depuis React
import React, { useRef } from 'react';
// Importe View et StyleSheet depuis react-native
import { View, StyleSheet } from 'react-native';
// Importe RNCamera depuis la bibliothèque react-native-camera
import { RNCamera } from 'react-native-camera';

// Définit un composant fonctionnel CameraComponent
const CameraComponent = () => {
  // Crée une référence pour la caméra en utilisant useRef
  const cameraRef = useRef(null);

  // Définit une fonction asynchrone pour prendre une photo
  const takePicture = async () => {
    // Vérifie si la référence de la caméra existe
    if (cameraRef.current) {
      // Options pour la prise de vue
      const options = { quality: 0.5, base64: true };
      // Appelle la méthode takePictureAsync pour prendre la photo
      const data = await cameraRef.current.takePictureAsync(options);
      // Affiche les données de la photo dans la console
      console.log(data);
      // Vous pouvez utiliser "data" pour effectuer des actions avec la photo prise
    }
  };

  // Rendu du composant
  return (
    <View style={styles.container}>
      {/* Composant RNCamera avec référence, style, type et mode flash spécifiés */}
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      {/* Vue contenant le bouton pour prendre la photo */}
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        {/* Bouton onPress appelant la fonction takePicture */}
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          {/* Texte à l'intérieur du bouton */}
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles définis à l'aide de la fonction StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

// Exporte le composant CameraComponent
export default CameraComponent;
