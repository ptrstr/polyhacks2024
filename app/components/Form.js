import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { CheckboxQuestion } from './CheckboxQuestion';

export function Form() {
    const [q1checked, setQ1Checked] = React.useState(false);

    return(
        <View>
            <Text variant="titleLarge" style="Line Height">Your daily questionnaire !</Text>
            <View>
                <CheckboxQuestion label="question1" checked={q1checked} setChecked={setQ1Checked} />
                <CheckboxQuestion label="question2" checked={q1checked} setChecked={setQ1Checked} />
                <CheckboxQuestion label="question3" checked={q1checked} setChecked={setQ1Checked} />
                <Button icon="send" mode="contained" onPress={() => console.log('Answered saved.')}>
                    Save my answers
                </Button>
            </View>
        </View>
    );
}