import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OnBoarding from '@screens/boarding'
import TodosScreen from '@screens/todos'

const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: true,
        unmountOnBlur: true,
      }}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Todos"
        component={TodosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
