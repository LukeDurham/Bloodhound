import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Input }  from "react-native-elements"

import styles from "../styles/pageStyles";

import React, { useEffect, useState } from 'react';




const UsersPage = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(response => {
        console.log("Response:", response);
        return response.json();
      })
      .then(data => {
        console.log("Data:", data);
        setBackendData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <View>
      {backendData.users === undefined ? (
        <Text>Loading...</Text>
      ) : (
        backendData.users.map((user, i) => <Text key={i}>{user}</Text>)
      )}
    </View>
  );
};

export default UsersPage;