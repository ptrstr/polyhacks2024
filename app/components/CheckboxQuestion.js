import * as React from 'react';
import { Checkbox } from 'react-native-paper';

export function CheckboxQuestion({label, checked, setChecked}) {
    return (
        <Checkbox.Item
            label={label}
            labelVariant="labelLarge"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
        />
    );
}