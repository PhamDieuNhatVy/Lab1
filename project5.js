import React from "react";
import { View, Text, StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    box: {
        width: 100,
        height: 100, justifyContent: "center",
        alignItems: "center",
    },
});
const Square = ({ text, bgColor = "#c1eaf5" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
);
export default () => {
    return (
        <View style={styles.container}>
            <Square text="Square 1" />
            <Square text="Square 2" bgColor="#d0e327" />
            <Square text="Square 3" bgColor="#6a0b99" />
        </View>
    );
};