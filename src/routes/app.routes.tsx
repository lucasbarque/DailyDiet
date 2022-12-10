import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Meals } from "@screens/Meals";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="meals" component={Meals} />
    </Navigator>
  );
}
