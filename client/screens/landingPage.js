import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground } from "react-native";
import { Input }  from "react-native-elements"

import styles from "../styles/pageStyles";

const LandingPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.pageContainer}>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/landingBackground.png")}>
                <Text style={[styles.title,styles.shadowProp]}>BloodHound</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.dividerLine}></View>
                    <TouchableOpacity style={[styles.loginButton, styles.shadowProp]} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.loginButton, styles.shadowProp]} onPress={() => navigation.navigate("Users")}>
                        <Text>Users</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.registerButton, styles.shadowProp]} onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.registerButtonText}>Register</Text>
                    </TouchableOpacity> 
                </View>
            </ImageBackground>
        </View>
    );
}

export default LandingPage