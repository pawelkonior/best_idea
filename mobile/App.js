import "react-native-gesture-handler";
import {StatusBar} from "expo-status-bar";
import {Provider as PaperProvider, Button, Avatar} from "react-native-paper";
import {NavigationContainer, Link} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Feather, AntDesign} from "@expo/vector-icons";

import Home from "./views/Home";
import Profile from "./views/Profile";
import Scanner from "./views/Scanner";
import Maps from "./views/Maps";
import Notifications from "./views/Notifications";

import {useEffect, useRef, useState} from "react";

import registerNNPushToken from 'native-notify';



const Stack = createNativeStackNavigator();

export default function App() {
    registerNNPushToken(4904, 'YHvvi2QDQiaM8FACwqGq43');
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    return (
        <PaperProvider>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerTitle: "Still Good AI",
                            headerRight: () => (
                                <>
                                    <Link to={{screen: 'Maps'}}>
                                        <AntDesign name="filter" size={24} color="black"/>
                                    </Link>

                                    <Link to={{screen: "Profile"}}>
                                        <Avatar.Text size={24} label="DM"/>
                                    </Link>
                                </>
                            ),
                            headerLeft: () => (
                                <Link to={{screen: "Notifications"}}>
                                    <Feather name="bell" size={24} color="gray"/>
                                </Link>
                            ),
                        }}
                    />
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Scanner" component={Scanner}/>
                    <Stack.Screen name="Maps" component={Maps}/>
                    <Stack.Screen name="Notifications" component={Notifications}/>

                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
