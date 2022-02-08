import React, { useEffect, useContext } from "react";
import { MainContext } from "../../MainContext";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  PassInput,
  Link,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
  SearchBar,
} from "../../components";
import Slideshow from "react-native-image-slider-show";
import { styles } from "./HomeStyle";

const Home = ({ navigation }) => {
  const { LoggedIn } = useContext(MainContext);
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.SignIn}>
        <Text style={styles.Text}>Sign in to see personalised deals</Text>
        <TouchableOpacity
          text="Sign In"
          onPress={() => navigation.navigate("Auth")}
          settings={["home"]}
        />
      </View>

      <SearchBar placeholder="Search Here" />

      <Slideshow
        dataSource={[
          {
            url: "https://cellularnews.com/wp-content/uploads/2020/02/Best-Budget-Phone-Under-200.jpg",
          },
          {
            url: "https://assets.shop.masoko.com/catalog/category/mobile_phones.png",
          },
          // { url: "http://dev.2use.com/static/media/iphone.f392fd50.png" },
        ]}
      />
    </View>
  );
};

export default Home;
