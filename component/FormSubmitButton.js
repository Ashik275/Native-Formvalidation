import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function FormSubmitButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ fontSize: 18, color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "rgba(27,27,51,1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
