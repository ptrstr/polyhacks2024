import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useRef } from 'react';
import { images } from '../images';

export function CameraBackground({ step, setStep }) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [photoUri, setPhotoUri] = useState('');
    const [binMode, setBinMode] = useState('');
    const camera = useRef();

    takePicture = async () => {
        let pic = await camera.current.takePictureAsync(null);
        images.bg = pic.uri;
        setPhotoUri(images.bg);
        setStep(2);
    };

    requestPermission();

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ratio={'1:1'} type={this.s} ref={(ref) => { camera.current = ref }} >
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.captureButton} onPress={this.takePicture} >
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
                </View>
            </Camera>
            <View style={styles.container}>
                <Button icon="trash-can" mode="contained" theme={{ colors: { primary: 'black' } }} onPress={() => setBinMode('Trash - 0.2')}>
                    Trash
                </Button>
                <Button icon="recycle" mode="contained" theme={{ colors: { primary: 'blue' } }} onPress={() => setBinMode('Recycle - 0.5')}>
                    Recycle
                </Button>
                <Button icon="food-apple" mode="contained" theme={{ colors: { primary: 'brown' } }} onPress={() => setBinMode('Compost - 0.5')}>
                    Compost
                </Button>
                <Button icon="battery" mode="contained" theme={{ colors: { primary: 'orange' } }} onPress={() => setBinMode('Electronics - 5')}>
                    Electronics
                </Button>
                <Text style={styles.mode}>{binMode}</Text>
                {photoUri && <Image source={{uri: photoUri}} style={{width: '100%', height: '100%'}} />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    maskOutter: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    maskInner: {
        width: 300,
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1,
    },
    captureButton: {
        width: 120,
        height: 'auto',
        flex: 1,
    },
    text: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    mode: {
        backgroundColor: '#ff4567',
        margin : 10,
        padding : 10,
    }
});