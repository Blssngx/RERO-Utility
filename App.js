import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import { View } from "react-native";
import SolarScreen from "./src/screens/SolarScreen";
import WelcomeScreen from "./src/screens/WelcomeSceen";
import ROScreen from "./src/screens/ROScreen";
import BatteryScreen from "./src/screens/BatteryScreen";
import OtherScreen from "./src/screens/OtherScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import QRScreen from "./src/screens/QRScreen";
import LocationScreen from "./src/screens/LocationScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="ROScreen" component={ROScreen} />
      <Stack.Screen name="SolarScreen" component={SolarScreen} />
      <Stack.Screen name="BatteryScreen" component={BatteryScreen} />
      <Stack.Screen name="OtherScreen" component={OtherScreen} />
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
      <Stack.Screen name='QRScreen' component={QRScreen} />
      {/* <Stack.Screen name='LocationScreen' component={LocationScreen} /> */}
    </Stack.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}