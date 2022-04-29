import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoCon}>
        <Image style={styles.logo} source={require("../assets/st.png")} />
        <Text style={styles.text}>Welcome to the SonnyTech Mobile App</Text>

        <Button
          color={"#008080"}
          style={styles.button}
          title="Login with your account"
          onPress={() => alert("Wait for Sonnytech to authenticate you")}
        />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: '10%',
      marginBottom: '20%',
  },
  button: {
    padding: 50,
  },
  logo: {
    height: 120,
    width: 120,
  },
  logoCon: {
    position: "absolute",
    top: 120,
    alignItems: "center",

  },
});

export default WelcomeScreen;
