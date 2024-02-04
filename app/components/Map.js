import { StyleSheet, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export function MapScreen({step, setStep}) {
    return (
        <View style={styles.container}>
            <Text onPress={() => setStep(1)}>Booooooooooooooooooooooooooooooooooo</Text>
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
