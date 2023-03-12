import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TodosScreen from '@screens/todos'
const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Todos"
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: true,
        unmountOnBlur: true,
      }}>
      <Stack.Screen
        name="Todos"
        component={TodosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
