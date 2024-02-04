import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'user';

export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return null;
    }
};

export const updateUser = async (items) => {
    try {
        const oldUser = await getUser();

        const newUser = {...oldUser, ...items};

        const jsonValue = JSON.stringify(newUser);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
    }
};