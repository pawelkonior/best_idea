import React from 'react';
import Home from "./Home";
import {Link, NavigationContainer} from "@react-navigation/native";
import {AntDesign, Feather} from "@expo/vector-icons";
import {Avatar} from "react-native-paper";
import Profile from "./Profile";
import Scanner from "./Scanner";
import Maps from "./Maps";
import Notifications from "./Notifications";
import Login from "./Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Dashboard(props) {
    return (
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
                            <Link to={{screen: "Login"}}>
                                <Feather name="bell" size={24} color="gray"/>
                            </Link>
                        ),
                    }}
                />
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="Scanner" component={Scanner}/>
                <Stack.Screen name="Maps" component={Maps}/>
                <Stack.Screen name="Notifications" component={Notifications}/>
                <Stack.Screen name="Login" component={Login}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Dashboard;