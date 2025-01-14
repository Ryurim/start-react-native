import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const MyButton = ({ title = "default", ...props }) => {
    // console.log("props 값 : ", props);
    return (
        <TouchableOpacity
            style={{
                backgroundColor: "#3498db",
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => props.onPress()}
        >
            <Text style={{ color: "#fff", fontSize: 24 }}>{props.children || title}</Text>
        </TouchableOpacity>
    );
};

// 이 defaultProps를 없애고 저 const 익명함수 안에 title="default"를 해주자! 가 요새 트렌드임
// MyButton.defaultProps = {
//     title: "Button",
// };

MyButton.propTypes = {
    // title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default MyButton;
