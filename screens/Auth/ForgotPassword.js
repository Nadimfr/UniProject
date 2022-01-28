import React, { useState } from "react";
import { Image, View, Dimensions } from "react-native";
import {
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  DocumentPicker,
  ImagePicker,
  Switch,
  ActivityIndicator,
  Picker,
  ViewContainer,
  CheckBox,
  MultiSelect,
  CountryCode,
  ScrollView,
  HeaderText,
} from "../../components/index";
import { styles } from "./ForgotPasswordStyle";

const ForgotPassword = (props) => {
  const [userCred, setUserCred] = useState({ email: "", password: "" });

  const settingCreds = (e, t) => {
    setUserCred({ ...userCred, [t]: e });
  };
  return (
    <View style={styles.Page}>
      <View style={styles.LogoImgContainer}>
        <Image
          source={require("../../assets/B2C.png")}
          style={styles.LogoImg}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.Title}>Forgot Password</Text>

      <TextInput
        variant="outlined"
        label="Email"
        onChangeText={(e) => settingCreds(e, "email")}
        value={userCred.email}
        left="email-outline"
      />

      <TouchableOpacity
        settings={["primary"]}
        style={{
          width: Dimensions.get("screen").width * 0.8,
          //   backgroundColor: "red",
        }}
        textStyle={{ color: "black" }}
        text="Submit"
        onPress={() => props.navigation.navigate("")}
      />
    </View>
  );
};

export default ForgotPassword;
