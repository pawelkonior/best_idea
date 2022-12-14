import React, {useContext, useEffect, useState} from "react";
import {SafeAreaView, SectionList, StyleSheet, Text, View} from "react-native";
import {Link} from "@react-navigation/native";

import {AntDesign, Feather} from "@expo/vector-icons";
import ProductsContext from "../context/useProducts";
import ProductItem from "../components/ProductItem";
import {StatusBar} from "expo-status-bar";
import styles from "../styles/sharedStyles.js";
import {AxiosContext} from "../context/AxiosContext";


function HeaderComponent() {
    return (
        <View style={styles.titleContainer}>
            <Link style={styles.space} to={{screen: 'Scanner'}}>
                <AntDesign name="pluscircleo" size={60} color="black"/>
            </Link>
        </View>
    )
}

function Home(props) {
    const axiosContext = useContext(AxiosContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosContext.authAxios.get('/products/')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View>
                {/*<List.Section>*/}
                {/*    <List.Item*/}
                {/*        title="First Item"*/}
                {/*        description="Item description"*/}
                {/*        left={(props) => <List.Icon {...props} icon="folder" />}*/}
                {/*        right={() => (*/}
                {/*            <AntDesign name="delete" size={20} color="black" />*/}
                {/*        )}*/}
                {/*    />*/}
                {/*</List.Section>*/}

                {/*<SectionList*/}
                {/*    sections={products}*/}
                {/*    renderItem={({item}) => <ProductItem {...item}/>}*/}
                {/*    renderSectionHeader={({section: {title}}) => (*/}
                {/*        <Text style={styles.header}>{title}</Text>*/}
                {/*    )}*/}
                {/*    keyExtractor={(item) => item.id}*/}
                {/*    stickySectionHeadersEnabled={true}*/}
                {/*    ItemSeparatorComponent={SeparatorComponent}*/}
                {/*    ListHeaderComponent={HeaderComponent}*/}
                {/*/>*/}
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
}

const SeparatorComponent = () => {
    return <View style={styles.seperatorStyle}/>;
};

export default Home;
