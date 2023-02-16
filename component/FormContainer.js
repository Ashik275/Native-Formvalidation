import { View, Text, Dimensions, KeyboardAvoidingView } from "react-native";
import React from "react";

export default function FormContainer({ children }) {
  return (
    <KeyboardAvoidingView
      enabled
      style={{
        paddingHorizontal: 20,
        width: Dimensions.get("window").width,
      }}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
