import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Link} from '@react-navigation/native';
import { Button } from "react-native-paper";

function Home(props) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link style={styles.space} to={{screen: 'Profile'}}>
                Go to profile
            </Link>



            <Link style={styles.space} to={{screen: 'Scanner'}}>
                <Button
                    icon="camera"
                    mode="contained"
                >
                    Scan products
                </Button>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    space: {
        margin: 10
    }
});

export default Home;