import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import styles from "../styles/sharedStyles.js";


function ProductItem({barcode, name, description, price, image}) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.buttonText}>{barcode}</Text>
            <Text>{name}</Text>
        </View>
    );
}


export default ProductItem;