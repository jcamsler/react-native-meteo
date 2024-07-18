import { Home } from "./pages/Home/Home";
import { Forecast } from "./pages/Forecast/Forecast";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  console.log("isFontLoaded:" + isFontLoaded);

  return (
    <NavigationContainer theme={navTheme}>
      {isFontLoaded ? (
        <Stack.Navigator
          screenOptions={{ animation: "fade", headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
