import React from "react";
import { TouchableOpacity, Text, Pressable } from "react-native";

const EventButton = () => {
    const _onPressIn = () => console.log("Press In !!!\n");
    const _onPressOut = () => console.log("Press Out !!!\n");
    const _onPress = () => console.log("Press !!!\n");
    const _OnLongPress = () => console.log("Long Press !!!\n");

    return (
        // <TouchableOpacity
        <Pressable
            style={{
                backgroundColor: "#f1c40f",
                // padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPressIn={_onPressIn}
            onLongPress={_OnLongPress}
            onPressOut={_onPressOut}
            onPress={_onPress}
            // delayLongPress={3000}
            //사용자의 편의성을 위해서 바깥쪽 클릭해도 먹게 하는거
            hitSlop={50}
            pressRetentionOffset={{ bottom: 50, left: 50, right: 50, top: 50 }}
        >
            <Text style={{ color: "#fff", fontSize: 24 }}>Press</Text>
            {/* </TouchableOpacity> */}
        </Pressable>
    );
};

export default EventButton;
