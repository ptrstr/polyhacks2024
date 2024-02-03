import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { Text, BottomNavigation, PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './components/Home';
import { SettingsScreen } from './components/Settings';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          tabBar={({ navigation, state, descriptors, insets }) => (
            <BottomNavigation.Bar
              navigationState={state}
              safeAreaInsets={insets}
              onTabPress={({ route, preventDefault }) => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (event.defaultPrevented) {
                  preventDefault();
                } else {
                  navigation.dispatch({
                    ...CommonActions.navigate(route.name, route.params),
                    target: state.key,
                  });
                }
              }}
              renderIcon={({ route, focused, color }) =>
                descriptors[route.key].options.tabBarIcon?.({
                  focused,
                  color,
                  size: 24,
                }) || null
              }
              getLabelText={({ route }) => descriptors[route.key].route.name}
            />
          )}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Icon name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Icon name="cog" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}

App.title = 'Superb App';