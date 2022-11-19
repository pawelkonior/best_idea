import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Link} from '@react-navigation/native';
import { Button } from "react-native-paper";

function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link to={{screen: 'Profile'}}>
                Go to profile
            </Link>
            <Button
                icon="camera"
                mode="contained"
                onPress={() => console.log("Pressed")}
            >
                Test React Native Paper by click me
            </Button>
        </View>
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

export default Home;