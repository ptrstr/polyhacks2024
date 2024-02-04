import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SettingsScreen } from './components/Settings';
import { HomeScreen } from './components/Home';
import { QuestionnaireScreen } from './components/Questionnaire';
import { getUser } from './Storage';
import { OnboardingScreen } from './components/Onboarding';
import { Loader } from './components/Loader';
import { GameScreen } from './components/Game';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);

  useEffect(() => {
    getUser()
      .then((v) => setIsFirstTime(v === null))
      .finally(() => setIsLoading(false));
  });

  if (isLoading) {
    return (
      <Provider>
        <Loader />
      </Provider>
    )
  }

  if (isFirstTime && false) {
    return (
      <Provider>
        <OnboardingScreen />
      </Provider>
    )
  }

  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Game"
            component={GameScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="google-controller" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Questionnaire"
            component={QuestionnaireScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chat-question" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer >
    </Provider >
  );
}