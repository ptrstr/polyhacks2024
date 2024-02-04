import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ActivityIndicator, IconButton } from 'react-native-paper';
import MapView, { UrlTile, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Loader } from './Loader';
import { Asset } from 'expo-asset';

// https://www.donneesquebec.ca/recherche/dataset/ecocentres-et-points-de-depot-municipaux

export function MapScreen({ step, setStep }) {
    const [userCoords, setUserCoords] = useState({ longitude: 0, latitude: 0, latitudeDelta: 0.5, longitudeDelta: 0.5 });
    const [coords, setCoords] = useState({ longitude: 0, latitude: 0, latitudeDelta: 0.5, longitudeDelta: 0.5 });
    const [ecocentres, setEcocentres] = useState([]);

    useEffect(() => {
        setEcocentres(require('../assets/ecocentrespointsdepotmunicipaux.json')
            .filter(x => x.Collecte_Latitude !== null && x.Collecte_Longitude !== null));

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});

            setUserCoords({ ...userCoords, latitude: location.coords.latitude, longitude: location.coords.longitude });
            setCoords({ ...userCoords });
        })();
    }, []);

    const onUserLocationChange = (event) => {
        if (event.coordinate) {
            setUserCoords(event.coordinate);
            setCoords({ ...userCoords });
        }
    };

    const onRegionChange = (region, details) => {
        setCoords({ ...userCoords });
    };

    return (
        <>
            <MapView
                style={styles.map}
                region={coords}
                showsUserLocation={true}
                showsBuildings={true}
                // scrollEnabled={false}
                // scrollDuringRotateOrZoomEnabled={false}
                mapType='terrain'
                followsUserLocation={true}
                onRegionChange={onRegionChange}
                onRegionChangeComplete={onRegionChange}
                onLongPress={onRegionChange}
                onPanDrag={onRegionChange}
                onPress={onRegionChange}
                onUserLocationChange={onUserLocationChange}>
                <UrlTile
                    urlTemplate='http://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    flipY={false} />
                {ecocentres.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: marker.Collecte_Latitude,
                            longitude: marker.Collecte_Longitude,
                        }}
                        title={marker.Collecte_Nom}
                        image={require('../assets/pokestop.png')}
                        opacity={0.7}
                        description={`${marker.Collecte_Adresse}, ${marker.Collecte_Ville}`} />
                ))}
            </MapView>
            <IconButton
                icon="camera"
                size={40}
                mode='contained'
                style={styles.button}
                onPress={() => setStep(2)} />
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
    button: {
        position: "absolute",
        bottom: 25,
        right: 25
    }
});
