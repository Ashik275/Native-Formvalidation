import { View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

export default function SignUpForm() {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { fullName, email, password, confirmPassword } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const isValidObjectField = (obj) => {
    return Object.values(obj).every((value) => value.trim()); //will convert userInfo object to an array and every method will check every filed of the object and return true if they have any value
  };
  const updateError = (error, stateUpdater) => {
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater("");
    }, 2500);
  };
  const isValidEmail = (value) => {
    const regx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(value);
  };
  const isValidForm = () => {
    //we will accept only if all of the fields have value
    if (!isValidObjectField(userInfo)) {
      return updateError("Requirdes All Field", setError);
    }
    //if valid name with 3 or more character
    if (!fullName.trim() || fullName.length < 3) {
      return updateError("Invalid Name!!", setError);
    }
    if (!isValidEmail(email)) {
      return updateError("Invalid Email!!", setError);
    }
    if (!password.trim() || password.length < 8) {
      return updateError("Password must be 8 character!!", setError);
    }
    if (password !== confirmPassword) {
      return updateError("Password Didn't match!!", setError);
    }
    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
      updateError("Successfully Register", setSuccess);
    }
  };
  return (
    <FormContainer
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width,
      }}
    >
      {error ? (
        <Text style={{ color: "red", fontWeight: "bold" }}>{error}</Text>
      ) : null}
      {success ? (
        <>
          <Text style={{ color: "green", fontWeight: "bold" }}>{success}</Text>
          <Text>Welcome {userInfo.fullName}</Text>
        </>
      ) : null}
      <FormInput
        value={fullName}
        autoCapitalize="none"
        title="Full Name"
        placeholder="Ashik"
        onChangeText={(value) => handleOnChangeText(value, "fullName")}
      />
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        autoCapitalize="none"
        title="Email"
        placeholder="example@gmail.com"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        autoCapitalize="none"
        secureTextEntry
        title="Password"
        placeholder="******"
      />
      <FormInput
        value={confirmPassword}
        autoCapitalize="none"
        onChangeText={(value) => handleOnChangeText(value, "confirmPassword")}
        secureTextEntry
        title="Confirm Password"
        placeholder="******"
      />
      <FormSubmitButton onPress={submitForm} title="Sign up" />
    </FormContainer>
  );
}
