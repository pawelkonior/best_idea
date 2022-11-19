import React from "react";
import { Text, View } from "react-native";
import { Link } from "@react-navigation/native";

function Profile(props) {
    return (
        <View>
            <Text>Profile</Text>
            <Link to={{ screen: "Home" }}>Go to home</Link>
        </View>
    );
}

export default Profile;
