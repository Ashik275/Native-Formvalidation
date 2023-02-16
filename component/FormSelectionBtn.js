import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
} from "react-native";
import React from "react";

export default function FormSelectionBtn({
  title,
  backgroundColor,
  style,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.container, style, { backgroundColor }]}>
        <Text style={{ fontSize: 16, color: "white" }}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "50%",
    backgroundColor: "#1b1b33",
    justifyContent: "center",
    alignItems: "center",
  },
});
