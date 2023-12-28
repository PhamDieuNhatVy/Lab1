import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "#6ec8f5",
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        ...props.buttonStyle,
      }}
    >
      <Text style={{ color: '#fff' }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button text="SAY HELLO" onPress={() => alert("HELLO!")} />
      <Button
        text="SAY GOODBYE"
        onPress={() => alert("GOODBYE!")}
        buttonStyle={{ backgroundColor: "#701162" }}
      />
    </View>
  );
}