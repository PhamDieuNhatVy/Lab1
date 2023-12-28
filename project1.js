import React from "react";
import {Text, View, StyleSheet} from "react-native";

const Ex1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HelloWorld</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2adb68',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Ex1;
