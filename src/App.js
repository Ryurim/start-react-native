import React from "react";
import { Text, View, Button } from "react-native";
import MyButton from "./components/MyButton";
import Counter from "./components/Counter";
import EventButton from "./components/EventButton";
import ViewBoxesWithColorAndText from "./components/ViewBoxesWithColorAndText";
import EventInput from "./components/EventInput";

const App = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* <Text style={{ fontSize: 30, marginBottom: 10 }}>Button Component</Text>
            <Button title="Button" onPress={() => alert("Click")} />
            <MyButton title="Button" onPress={() => alert("props")} />
            <MyButton title="Button" onPress={() => alert("Children")}>
                Children Props
            </MyButton>
            <MyButton onPress={() => alert("default")} /> */}
            {/* <MyButton title={123} /> */}
            {/* <Counter /> */}
            <EventButton />
            {/* <ViewBoxesWithColorAndText /> */}
            <EventInput />
        </View>
    );
};

export default App;
