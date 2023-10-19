import React, { useState, useEffect, useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import Article from "../Articles";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./Style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { withNavigation } from 'react-navigation';

const MyCustomLoginScreen = withNavigation((props) => {
  //=====State=====
  const [show, setShow] = useState(false);
  const [country_code, setCountryCode] = useState("+1");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputs = [];

  const handleOtpChange = (value, index) => {
    console.log("value, index", value, index);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      inputs[index + 1].focus();
    }
  };

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      const enroll = await LocalAuthentication.isEnrolledAsync();
      if (enroll) {
        setFingerprint(true);
      }
    })();
  }, []);

  console.log(
    "fingerprint=",
    fingerprint,
    "isBiometricSupported=",
    isBiometricSupported,
    "otp=",
    otp
  );

  const handle = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
      });
      console.log("biometricAuth", biometricAuth);
      if (biometricAuth.success) {
        Alert.alert("biometric sucess");
        props.navigation.navigate("ArticleScreen");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //=====handle Login=====

  const handlePress = () => {
    props.navigation.navigate("Main")

    let isValid = true;
    if (mobile.trim() === "") {
      isValid = false;
      setError("Please Enter Mobile Number");
    } else if (mobile.length < 10) {
      setError("Please Enter Valid Number");
    } else {
      setModalVisible(true);
    }
    return isValid;
  };

  const validateOtp = () => {
    const changeToNu = otp.join(""); // Concatenate the strings
    const result = parseInt(changeToNu);
    console.log("otp=", result);
    setModalVisible(false);
    alert("sucess");
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Please enter the OTP we sent to your mobile number
            </Text>
            <View style={styles.textInputC}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.box}
                  maxLength={1}
                  keyboardType="numeric"
                  onChangeText={(value) => handleOtpChange(value, index)}
                  value={digit}
                  ref={(input) => {
                    inputs[index] = input;
                  }}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => validateOtp()}
            >
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Image
        source={{
          uri: "https://portal.domcare.co.uk/wp-content/uploads/DomCare-Portal-Logo-2019-WHITE-220-55px.png",
        }}
        style={styles.icon}
      />
      <Text style={styles.signIn}>Sign In</Text>
      <CountryPicker
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        style={{
          modal: {
            height: 500,
          },
        }}
      />

      <Text style={styles.mobileNu}>Enter Your Mobile Number</Text>
      <Text style={styles.text}>we will sent you verification code</Text>
      <View style={styles.input}>
        <View style={styles.inputView}>
          <TouchableOpacity
            style={styles.countryCodeView}
            onPress={() => setShow(true)}
          >
            <Text style={styles.countryCode}>{country_code}</Text>
            <Image
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/014/455/895/non_2x/down-arrow-icon-on-transparent-background-free-png.png",
              }}
              style={{
                height: 16,
                width: 16,
                marginLeft: 5,
                resizeMode: "contain",
                tintColor: "white",
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              width: 200,
              color: "white",
              fontSize: 18,
            }}
            maxLength={15}
            keyboardType="numeric"
            placeholder="ENTER MOBILE"
            placeholderTextColor={"white"}
            onChangeText={(val) => {
              setMobile(val), setError("");
            }}
          />
        </View>
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity
          style={styles.component}
          onPress={() => handlePress()}
        >
          <Text style={styles.buttonText}>LOGIN WITH OTP</Text>
        </TouchableOpacity>
      </View>
      {fingerprint && (
        <TouchableOpacity onPress={() => handle()}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7iB0qjRnjGJ9RPXJf-lQhs3F2lqY3VuGnM9DBTAliT5VnicGltQgY9cIi4C8kW4ditOI&usqp=CAU",
            }}
            style={{
              height: 60,
              width: 60,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <Text style={{ alignSelf: "center", color: "white" }}>
            use Biometrics
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

MyCustomLoginScreen.navigationOptions = {
  header: null,
};
// export component
export default MyCustomLoginScreen;
