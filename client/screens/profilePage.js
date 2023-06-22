import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";

import Tabs from "./components/tabs";

const Profile = () => {
    const navigation = useNavigation();
    return (
       <SafeAreaView>
            <Tabs/>
       </SafeAreaView>
       
    );
}
export default Profile;