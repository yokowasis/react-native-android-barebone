import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import drawer from "./data/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import logo from "./data/logo";

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function StackPage({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Get Stacked</Text>
      <Button
        title="Stack Me"
        onPress={() => {
          navigation.navigate("Sss");
        }}
      />
    </View>
  );
}

function StackHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={StackPage}></Stack.Screen>
      <Stack.Screen name="Sss" component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function NavHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }

          // You can return any component that you like here!
          return <Text>AAA</Text>;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Tabs() {}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginTop: 60,
          marginBottom: 30,
          alignItems: "center",
        }}
      >
        <View style={{ width: 150, height: 150 }}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        {drawer.map((object, index) =>
          object.tab ? (
            <Drawer.Screen key={index} name={object.name}>
              {() => {
                return (
                  <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                          iconName = focused
                            ? "ios-information-circle"
                            : "ios-information-circle-outline";
                        } else if (route.name === "Settings") {
                          iconName = focused ? "ios-list-box" : "ios-list";
                        }

                        // You can return any component that you like here!
                        return <Text>AAA</Text>;
                      },
                      tabBarActiveTintColor: "tomato",
                      tabBarInactiveTintColor: "gray",
                      headerShown: false,
                    })}
                  >
                    {object?.tab &&
                      object.tab.map((tabChild, index) => {
                        return (
                          <Tab.Screen
                            key={index}
                            name={tabChild.name}
                            component={tabChild.component}
                          />
                        );
                      })}
                  </Tab.Navigator>
                );
              }}
            </Drawer.Screen>
          ) : (
            <Drawer.Screen
              key={index}
              name={object.name}
              component={object.component}
            />
          )
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
