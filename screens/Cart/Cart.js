import React from "react";
import { View, Dimensions, Image, Platform } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ScrollViewIndicator from "react-native-scroll-indicator";
import {
  TouchableOpacity,
  TextInput,
  PassInput,
  Link,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
} from "../../components";
import { styles } from "./CartStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const Cart = ({ navigation, route }) => {
  const [showPromo, setShowPromo] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.Title}>Your Cart</Text>
        <Text style={styles.SubTitle}>3 items in Cart </Text>
      </View>

      <View
        style={{
          height: 345,
          backgroundColor: "white",
          width: Dimensions.get("screen").width * 0.9,
          overflow: "scroll",
        }}
      >
        {Platform.OS === "ios" ? (
          <ScrollViewIndicator
            shouldIndicatorHide={false}
            flexibleIndicator={false}
            scrollIndicatorStyle={{ backgroundColor: "red" }}
            scrollIndicatorContainerStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              width: 4,
            }}
          >
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
          </ScrollViewIndicator>
        ) : null}
        {Platform.OS === "android" ? (
          <ScrollView>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
            <View style={styles.Product}>
              <Image
                style={styles.Image}
                source={require("../../assets/Note9.png")}
              />
              <View
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text style={styles.ProductName}>Galaxy Note 9</Text>
                <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
                <Text style={styles.Price}>USD $250.00</Text>
              </View>
            </View>
          </ScrollView>
        ) : null}
      </View>

      <View>
        <Text style={styles.Title2}>Your Order</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "black",
            borderBottomWidth: 0.2,
          }}
        >
          <Text style={{ fontFamily: "Roboto-Regular" }}>Subtotal</Text>
          <Text style={{ fontFamily: "Roboto-Regular" }}>USD $250.00</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: "black",
            borderBottomWidth: 0.2,
          }}
        >
          <Text style={{ fontFamily: "Roboto-Regular" }}>Shipping</Text>
          <Text style={{ fontFamily: "Roboto-Regular" }}>USD $500.00</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Text style={styles.Text1}>TOTAL</Text>
          <Text style={styles.Text2}>USD $750.00</Text>
        </View>

        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {active == false ? (
              <Entypo
                style={styles.Icon}
                name="chevron-thin-down"
                size={30}
                color="#E61A23"
                onPress={() => {
                  setActive(true);
                  setShowPromo(true);
                }}
              />
            ) : (
              <Entypo
                style={styles.Icon2}
                name="chevron-thin-down"
                size={30}
                color="#E61A23"
                onPress={() => {
                  setActive(false);
                  setShowPromo(false);
                }}
              />
            )}
            <Text style={styles.Text2}>Apply Promocode</Text>
          </View>
          {showPromo ? (
            <KeyboardAvoidingView style={styles.PromoView}>
              <TextInput
                style={styles.Input}
                variant="flat"
                label="Enter Code"
              />
              <TouchableOpacity
                style={{ marginBottom: 20 }}
                textStyle={{ color: "white" }}
                text="Apply"
                settings={["primary"]}
              />
            </KeyboardAvoidingView>
          ) : null}
        </View>
        <TouchableOpacity
          style={{ width: 300 }}
          style={{ marginBottom: 20 }}
          textStyle={{ color: "white" }}
          text="Check Out"
          settings={["home"]}
        />
      </View>
    </ScrollView>
  );
};

export default Cart;
