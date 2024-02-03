import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SettingsScreen } from './components/Settings';
import { HomeScreen } from './components/Home';
import { QuestionnaireScreen } from './components/Questionnaire';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cog" color={color} size={26} />
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
      </NavigationContainer>
    </Provider>
  );
}