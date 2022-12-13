import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feedback } from '@screens/Feedback';
import { Meals } from '@screens/Meals';
import { NewMeal } from '@screens/NewMeal';
import { Statitics } from '@screens/Statitics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="meals" component={Meals} />
      <Screen name="statitics" component={Statitics} />
      <Screen name="new-meal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
