import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Button } from "react-native-paper";

export default function App() {
    return (
        <PaperProvider>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Button
                    icon="camera"
                    mode="contained"
                    onPress={() => console.log("Pressed")}
                >
                    Test React Native Paper by click me
                </Button>
            </View>
        </PaperProvider>
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
