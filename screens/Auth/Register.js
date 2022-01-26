import React, { useContext, useState } from "react";
import { View, Image } from "react-native";
import { MainContext } from "../../MainContext";
import { formValidator } from "../../helpers/formValidator";
import {
  Alert,
  TouchableOpacity,
  TextInput,
  PassInput,
  CountryCode,
  KeyboardAvoidingView,
} from "../../components/index";
import { styles } from "./RegisterStyle";

const Register = ({ navigation }) => {
  const [userCred, setUserCred] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState(true);

  const settingCreds = (e, t) => {
    setUserCred({ ...userCred, [t]: e });
  };

  return (
    <KeyboardAvoidingView style={styles.loginContainer}>
      <Image
        source={require("../../assets/B2C.png")}
        style={styles.RegImg}
        resizeMode="cover"
      />

      <TextInput
        variant="outlined"
        label="Email"
        onChangeText={(e) => settingCreds(e, "email")}
        value={userCred.email}
        left="account-outline"
      />
      <TextInput
        variant="outlined"
        label="Full Name"
        onChangeText={(e) => settingCreds(e, "fullname")}
        value={userCred.fullname}
        left="account-outline"
      />

      <CountryCode
        onChangeFormattedText={(text) => {
          setUserCred({ ...userCred, phone: text });
          console.log(userCred.phone);
        }}
        defaultValue={userCred.phone}
      />

      <PassInput
        variant="outlined"
        label="Password"
        onChangeText={(e) => settingCreds(e, "password")}
        value={userCred.password}
        left="lock-outline"
      />
      <PassInput
        variant="outlined"
        label="Confirm Password"
        onChangeText={(e) => settingCreds(e, "confirm")}
        value={userCred.confirm}
        left="lock-outline"
      />
      <TouchableOpacity
        // style={{
        //   width: Dimensions.get("screen").width * 0.75,
        // }}
        textStyle={{ color: "white" }}
        text="Register"
        onPress={() =>
          formValidator(userCred, "register", () =>
            Alert("SignUp", "User registered successfully", [
              { text: "Ok", onPress: () => navigation.navigate("login") },
            ])
          )
        }
        settings={["primary", "outlined"]}
      />
    </KeyboardAvoidingView>
  );
};

export default Register;
