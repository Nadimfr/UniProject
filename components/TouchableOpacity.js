import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const TouchableOpacityComponent = (props) => {
  const chosenStyles = props.settings.map((item) => styles[item]);
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[chosenStyles, props.style]}
    >
      <Text
        style={[
          props.textStyle,
          {
            display: "flex",
            fontFamily: "Roboto-Medium",
            fontSize: 20,
            color: "white",
          },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

// <------ STYLES CHANGES DEPENDING ON PROPS ------>

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
    width: 200,
    alignItems: "center",
    borderRadius: 20,
  },
  null: {
    borderColor: null,
    borderWidth: 0,
  },
  primary: {
    borderColor: "#E61A23",
    backgroundColor: "#E61A23",
  },
  // secondary: {
  //   borderWidth: 2,
  //   borderColor: "#E61A23",
  //   borderColor: "#E61A23",
  //   backgroundColor: "white",
  // },
  danger: {
    borderColor: "#313783",
    backgroundColor: "#313783",
  },
  outlined: {
    backgroundColor: "#E61A23",
  },
});

export default TouchableOpacityComponent;
