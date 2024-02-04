import * as React from 'react';
import { Text, View } from 'react-native';
import { Form } from './Form';

export function QuestionnaireScreen() {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Form />
    </View>
    );
}