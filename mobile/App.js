import { StyleSheet } from "react-native";

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider, View, Text } from "react-native-paper";
import { NavigationContainer, Link } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feather, AntDesign } from "@expo/vector-icons";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Scanner from "./views/Scanner";
import Maps from "./views/Maps";
import Notifications from "./views/Notifications";

import { useEffect, useRef, useState } from "react";

import registerNNPushToken from "native-notify";
import { ProductsProvider } from "./context/useProducts";

const Stack = createNativeStackNavigator();

export default function App() {
    registerNNPushToken(4904, "YHvvi2QDQiaM8FACwqGq43");
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    return (
        <ProductsProvider>
            <PaperProvider>
                <StatusBar style="auto" />
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{
                                headerTitle: "",
                                headerRight: () => (
                                    <>
                                        <Link to={{ screen: "Notifications" }}>
                                            <Feather
                                                name="bell"
                                                size={24}
                                                color="gray"
                                            />
                                        </Link>
                                    </>
                                ),
                                headerLeft: () => (
                                    <Text style={styles.titleText}>
                                        <Text style={styles.titleTextBlack}>
                                            {"Still"}
                                            <Text style={styles.titleTextGreen}>
                                                {"Good"}
                                            </Text>
                                            {"AI"}
                                        </Text>
                                    </Text>
                                ),
                            }}
                        />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="Scanner" component={Scanner} />
                        <Stack.Screen name="Maps" component={Maps} />
                        <Stack.Screen
                            name="Notifications"
                            component={Notifications}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </ProductsProvider>
    );
}

const styles = StyleSheet.create({
    titleText: {
        width: 143,
        height: 33,
        fontFmily: "Roboto",
        fontStyle: "normal",
        fontWight: 700,
        fontSize: 28,
        lineHeight: 33,
    },
    titleText: {
        width: 143,
        height: 33,
        fontFmily: "Roboto",
        fontStyle: "normal",
        fontWight: 700,
        fontSize: 28,
        lineHeight: 33,
        color: "black",
    },
    titleTextGreen: {
        color: "green",
    },
});
