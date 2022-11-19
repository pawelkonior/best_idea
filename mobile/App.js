import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Provider as PaperProvider} from "react-native-paper";
import {Button} from "react-native-paper";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "./views/Home";
import Profile from "./views/Profile";
import Scanner from "./views/Scanner";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <PaperProvider>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Scanner" component={Scanner}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
