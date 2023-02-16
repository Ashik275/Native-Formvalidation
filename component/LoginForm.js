import { View, Text, Dimensions, TextInput } from "react-native";
import React from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

export default function LoginForm() {
  return (
    <FormContainer>
      <FormInput title="Email" placeholder="example@gmail.com" />
      <FormInput title="Password" placeholder="******" />
      <FormSubmitButton title="Login" />
    </FormContainer>
  );
}
