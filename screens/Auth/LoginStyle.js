import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  Button: {
    alignItems: "center",
    backgroundColor: "blue",
    width: 200,
    marginVertical: 10,
    paddingVertical: 10,
  },
  ButtonText: {
    color: "#fff",
  },
  Header: {
    textAlign: "center",
    textAlignVertical: "center",
    height: 300,
  },
  LogoImgContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  LogoImg: {
    marginTop: 100,
    marginBottom: 50,
    width: 100,
    height: 100,
  },
  RegisterButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#E61A23",
    borderStyle: "solid",
    borderColor: "#E61A23",
    borderWidth: 2,
    borderRadius: 25,
  },
  RegisterText: {
    color: "#E61A23",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    // width: Dimensions.get("screen").width,
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: "#A6A6A6",
    alignSelf: "center",
  },
  loginText: {
    color: "#A6A6A6",
    fontSize: 16,
    marginHorizontal: 5,
  },
  NoAccountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
  },
  Circle: {
    marginHorizontal: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.25 : 0.25,
    borderRadius: 100,
    shadowRadius: Platform.OS === "ios" ? 3.84 : 3.84,
  },
  Icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
