import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import FormHeader from "./component/FormHeader";
import FormSelectionBtn from "./component/FormSelectionBtn";
import LoginForm from "./component/LoginForm";
import SignUpForm from "./component/SignUpForm";

const { width } = Dimensions.get("window");
export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });
  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const logionColrorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,1)", "rgba(27,27,51,0.4)"],
  });
  const signUpColrorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,0.4)", "rgba(27,27,51,1)"],
  });
  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          subHeading="Youtube Task Management System"
          leftHeading="Welcome "
          rightHeading="Back"
          rightHeaderOpacity={rightHeaderOpacity}
          leftHeaderTranslateX={leftHeaderTranslateX}
          rightHeaderTranslateY={rightHeaderTranslateY}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectionBtn
          style={styles.borderLeft}
          backgroundColor={logionColrorInterpolate}
          title="Login"
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectionBtn
          style={styles.borderRight}
          backgroundColor={signUpColrorInterpolate}
          title="Registration"
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        horizontal
        ref={scrollView}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginForm />
        <ScrollView>
          <SignUpForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
