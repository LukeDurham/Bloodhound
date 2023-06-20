import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";

import styles from "../styles/homeStyles";
import Tabs from "./components/tabs";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.pageContainer}>
            <View style={styles.navbarContainer}>
                <View>
                    <TouchableOpacity style={styles.menuButton}>
                        <Image
                            style={styles.menuIcon}
                            source={require("../assets/icons/menu.png")}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("Welcome")}>
                        <Image
                            style={styles.menuIcon}
                            source={require("../assets/icons/boise.png")}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>
                    Hello, Aaron
                </Text>
            </View>
            <View style={styles.toDoContainer}>
                <View style={styles.toDoBox}>
                    <Text style={styles.toDoHeader}>To Do</Text>
                    <View>
                        <Text>Objectives</Text>
                    </View>
                </View>      
            </View>
            <Tabs/>
        </SafeAreaView>
    );
}
export default Home;