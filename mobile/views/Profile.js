import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Avatar, List, TextInput, Text, Image } from "react-native-paper";
import { Slider } from "@miblanchard/react-native-slider";
import * as ImagePicker from "expo-image-picker";

function Profile(props) {
    const [name, setName] = useState("");
    const [value, setValue] = useState(0.2);
    const [image, setImage] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("----dd--------");
        console.log(result.assets[0].uri);
        console.log("-----asd-------");

        if (!result.canceled) {
            setImage(`${result.assets[0].uri}`);
            console.log(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                {image ? (
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                ) : null}
                <Pressable style={styles.avatarIcon} onPress={pickImage}>
                    {/* <Avatar.Text size={60} label="DM" /> */}

                    {!image ? (
                        <>
                            {console.log(image)}
                            <Avatar.Text size={60} label="DM" />
                        </>
                    ) : (
                        <>{console.log(image)}</>
                    )}
                </Pressable>
                {/* {image && (
                    console.log('------------');
                    console.log(image);
                    console.log('------------');
                    <Image
                        source={{ uri: image }}
                        style={{ width: 200, height: 200 }}
                    />
                )} */}
            </View>
            <View style={styles.nameText}>
                <Text variant="headlineLarge">Dominika</Text>
            </View>
            <View style={styles.locationText}>
                <Text variant="bodySmall">Kraków, PL</Text>
            </View>
            <View style={styles.userInfo}>
                <List.Section>
                    <List.Subheader>
                        Informacje o Tobie (opcjonalnie)
                    </List.Subheader>

                    <View style={styles.sliderComponent}>
                        <List.Item
                            title={`Zasięg powiadomień: ${value}m `}
                            description={() => (
                                <Slider
                                    value={value}
                                    onValueChange={(value) =>
                                        setValue(parseFloat(value).toFixed(2))
                                    }
                                />
                            )}
                        />
                    </View>
                </List.Section>
            </View>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    avatarIcon: {
        marginTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    nameText: {
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    locationText: {
        alignItems: "center",
        justifyContent: "center",
    },
    sliderElement: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center",
    },
    sliderComponent: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10,
        height: 65,
        backgroundColor: "#E0E0E0",
    },
});
