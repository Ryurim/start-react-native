import React from "react";
import { View, Text } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const ViewBoxesWithColorAndText = () => {
    return (
        <View>
            <View style={{ backgroundColor: "blue", flex: 0.2 }} />
            <View style={{ backgroundColor: "red", flex: 0.4 }} />
            <Text>Hello World!</Text>
        </View>
    );
};

export default ViewBoxesWithColorAndText;
