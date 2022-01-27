import React, { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "./ContactStyle";
import { Ionicons, FontAwesome, Feather, Entypo } from "@expo/vector-icons";
import {
  Text,
  Alert,
  DocumentPicker,
  ImagePicker,
  Switch,
  ActivityIndicator,
  Picker,
  ViewContainer,
  CheckBox,
  MultiSelect,
  ScrollView,
  HeaderText,
} from "../../components/index";

const Contact = ({ navigation }) => {
  const [document, setDocument] = useState();
  const [image, setImage] = useState();
  const [switchToggle, setSwitchToggle] = useState(false);
  const [selected, setSelected] = useState();
  const [checked, setChecked] = useState(false);
  const [multiple, setMultiple] = useState();

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ViewContainer style={{ paddingHorizontal: 20 }}>
        <HeaderText style={styles.headerText}>Contact Us</HeaderText>

        <View style={styles.textContainer}>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.Button}>
            <Entypo name="location-pin" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>102 Street 2714 Don</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <FontAwesome name="phone" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>+0123 4567 8910</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Ionicons name="mail" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>User@hotmail.com</Text>
          </TouchableOpacity>
        </View>

        {/* <Image
          style={styles.Banner}
          source={require("../../assets/Banner.png")}
          resizeMethod="auto"
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
          <View style={styles.Separator}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <View style={styles.Cover}>
              <Feather name="eye" size={24} color="white" />
            </View>
            <Text style={styles.Title}>Our Vision</Text>
          </View>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
          <View style={styles.Separator}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <View style={styles.Cover}>
              <Feather name="eye" size={24} color="white" />
            </View>
            <Text style={styles.Title}>Our Mission</Text>
          </View>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
        </View> */}
      </ViewContainer>
    </ScrollView>
  );
};

export default Contact;
