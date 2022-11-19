import React from 'react';
import {Text, View} from "react-native";
import {Link} from '@react-navigation/native';

function Home(props) {
    return (
        <View>
            <Text>Home</Text>
            <Link to={{screen: 'Profile'}}>
                Go to profile
            </Link>
        </View>
    );
}

export default Home;