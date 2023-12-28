import React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-paper";
const Ex2 = () => {
    return (
        <View style={styles.container}>
            <Button icon="key" mode="contained" onPress={() => alert("Chào bạn")}>
                Double click
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Ex2;