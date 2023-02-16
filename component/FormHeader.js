import { View, Text, Animated, StyleSheet } from "react-native";
import React from "react";

export default function FormHeader({
  leftHeading,
  rightHeading,
  subHeading,
  leftHeaderTranslateX = 40,
  rightHeaderTranslateY = -20,
  rightHeaderOpacity = 0,
}) {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Text
          style={[
            styles.heading,
            { transform: [{ translateX: leftHeaderTranslateX }] },
          ]}
        >
          {leftHeading}{" "}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity: rightHeaderOpacity,
              transform: [{ translateY: rightHeaderTranslateY }],
            },
          ]}
        >
          {rightHeading}
        </Animated.Text>
      </View>
      <Text style={{ fontSize: 18, color: "#1b1b33", textAlign: "center" }}>
        {subHeading}
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1b1b33",
  },
});
