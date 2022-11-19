import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import {TextInput, IconButton, MD3Colors} from 'react-native-paper';


import * as Location from 'expo-location';

function Maps(props) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = React.useState("");


    const getLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <TextInput
                    style={styles.inputAddress}
                    label="Address"
                    value={address}
                    onChangeText={text => setAddress(text)}
                />
                <IconButton
                    icon="map-marker-outline"
                    iconColor={MD3Colors}
                    size={40}
                    onPress={getLocation}
                />
            </View>
            {location !== null && (
                <>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: location.coords?.latitude,
                            longitude: location.coords?.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.coords?.latitude,
                                longitude: location.coords?.longitude,
                            }}
                            title={'***** ***'}
                            description={'***** ***'}
                        />
                    </MapView>
                </>
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
    },
    containerForm: {
        width: '90%',
        margin: 10,
        flexDirection: 'row',
    },
    inputAddress: {
        width: '80%',
    }

});

export default Maps;