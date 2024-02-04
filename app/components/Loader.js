import { StyleSheet, View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating="true" />
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
