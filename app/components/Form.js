import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { CheckboxQuestion } from './CheckboxQuestion';

export function Form() {
    const [q1checked, setQ1Checked] = React.useState(false);
    const [q2checked, setQ2Checked] = React.useState(false);
    const [q3checked, setQ3Checked] = React.useState(false);
    const [q4checked, setQ4Checked] = React.useState(false);
    const [q5checked, setQ5Checked] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [isFirst1, setFirst1] = React.useState(true);
    const [isFirst2, setFirst2] = React.useState(true);
    const [isFirst3, setFirst3] = React.useState(true);
    const [isFirst4, setFirst4] = React.useState(true);
    const [isFirst5, setFirst5] = React.useState(true);

    const calculateValue = () => {
        if (q1checked) setValue(value + 0.99);// else if ( !q1checked) {setValue(value - 0.99 * (isFirst1 ? 0 : 2)); }; 
        if (q2checked) setValue(value + 0.1); //else if (!q2checked) {setValue(value - 0.1 * (isFirst2 ? 0 : 2)); }; 
        if (q3checked) setValue(value + 0.06);// else if ( !q3checked) {setValue(value - 0.06 * (isFirst3 ? 0 : 2)); }; 
        if (q4checked) setValue(value + 0.13); //else if (!q4checked) {setValue(value - 0.13 * (isFirst4 ? 0 : 2)); }; 
        if (q5checked) setValue(value + 0.13);// else if (!q5checked) {setValue(value - 0.13 * (isFirst5 ? 0 : 2)); }; 
    }

    const checker = (checkee, isFirst) => {
        return (isChecked) => {
            checkee(isChecked);
            calculateValue();
            isFirst(false);
        }
    }

    return(
        <View style={styles.questionForm}>
            <Text variant="titleLarge" style="Line Height">Your daily questionnaire !</Text>
            <View>
                <CheckboxQuestion label="Did you use a reusable cup to consume water?" checked={q1checked} setChecked={checker(setQ1Checked, setFirst1)} />
                <CheckboxQuestion label="Did you use a reusable cup to consume cofee?" checked={q2checked} setChecked={checker(setQ2Checked, setFirst2)}/>
                <CheckboxQuestion label="Was your dinner packed in a Tupperware?" checked={q3checked} setChecked={checker(setQ3Checked, setFirst3)}/>
                <CheckboxQuestion label="Do you unplug ALL your devices when they have finished charging?" checked={q4checked} setChecked={checker(setQ4Checked, setFirst4)}/>
                <CheckboxQuestion label="Do you unplug the electrical cables from the wall socket when they are no longer connected to any device?" checked={q5checked} setChecked={checker(setQ5Checked, setFirst5)}/>
                <Button icon="send" mode="contained" onPress={() => console.log('Answered saved.')}>
                    Save my answers
                </Button>
                <Text variant="titleSmall">You saved {value} $.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    questionForm: {
        margin: 15,
    },
});