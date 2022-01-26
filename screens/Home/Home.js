import React, { useEffect, useContext } from "react";
import { View } from "react-native";
import { MainContext } from "../../MainContext";
import { Text } from "../../components/index";

const Home = ({ navigation }) => {
  const { LoggedIn } = useContext(MainContext);
  useEffect(() => {}, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{LoggedIn ? "logged in" : "Not Logged In"}</Text>
      <Text onPress={() => navigation.navigate("homeDetailed")}>Home Page</Text>
    </View>
  );
};

export default Home;
