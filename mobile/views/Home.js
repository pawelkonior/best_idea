import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import {Link} from "@react-navigation/native";

function Home(props) {
    return (
        <View style={styles.container}>
            <View style={styles.addProductButton}>
                <Link style={styles.space} to={{screen: 'Scanner'}}>
                    <AntDesign name="pluscircleo" size={60} color="black" />
                </Link>
            </View>
            <View>
                <List.Section>
                    <List.Item
                        title="First Item"
                        description="Item description"
                        left={(props) => <List.Icon {...props} icon="folder" />}
                        right={() => (
                            <AntDesign name="delete" size={20} color="black" />
                        )}
                    />
                </List.Section>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    addProductButton: {
        alignItems: "center",
        marginTop: 80,
        width: "100%",
        justifyContent: "flex-start",
    },
    space: {
        margin: 10
    }
});

export default Home;
