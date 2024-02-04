import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export function OnboardingScreen() {
    const [step, setStep] = useState(0);
    const [tooltip, setTooltip] = useState("");
    const [text, setText] = useState("");
    const [label, setLabel] = useState("");

    let user = {}

    const updateForm = () => {
        switch (step) {
            default:
            case 0:
                setTooltip("Let's get to know you");
                setLabel('Name');
                break;
            case 1:
                user.name = text;    

                setTooltip("");
                setLabel('Name');
                break;
        }
    };

    useEffect(updateForm);

    return (
        <View style={styles.container}>
            <View style={styles.fw}>
                <Text variant="displayLarge">Welcome!</Text>
                <Text variant="displaySmall">{tooltip}</Text>
            </View>
            <View style={styles.fw}>
                <TextInput label={label} value={text} onChangeText={setText} />
            </View>
            <Button icon="arrow-right" style={styles.button} mode="contained" onLongPress={() => setStep(0)} onPress={() => setStep(step + 1)}>
                Next
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: '20%',
        marginHorizontal: '10%'
    },
    fw: {
        width: '100%'
    },
    button: {
        flexDirection: 'row-reverse',
    },
});
