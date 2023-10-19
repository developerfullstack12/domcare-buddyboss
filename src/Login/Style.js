//imports styles
import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e73be",
    flex: 1,
    height: "100%",
  },
  signIn: {
    fontSize: 26,
    fontWeight: "500",
    color: "white",
    padding: "5%",
    alignSelf: "center",
  },
  user: {
    marginLeft: 30,
    color: "white",
    fontSize: 12,
    marginVertical: "10%",
  },
  input: {
    marginHorizontal: "8%",
    borderRadius: 12,
    padding: "5%",
  },
  errorText: {
    color: "white",
    marginHorizontal: "8%",
  },
  icon: {
    height: height / 5,
    width: width / 1.5,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "20%",
  },
  enterNU: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#6d6d6d",
    padding: "5%",
  },
  component: {
    backgroundColor: "white",
    padding: "3%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  buttonText: {
    color: "#6d6d6d",
    fontWeight: "500",
    fontSize: 18,
  },
  mobileNu: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
    marginTop: "10%",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  inputView: {
    flexDirection: "row",
    marginTop: "8%",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  countryCode: {
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
  countryCodeView: {
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 10,
    width: 100,
    flexDirection: "row",
  },

  error: {
    color: "red",
    marginLeft: 20,
    marginTop: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  box: {
    borderWidth: 1,
    borderColor: "#6d6d6d",
    width: 45,
    height: 45,
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: "#6d6d6d",
  },
  textInputC: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: "#6d6d6d",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    padding: 10,
    width: width / 2,
  },
  submitText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default styles;
