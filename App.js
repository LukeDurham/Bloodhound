import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blood Hound</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputField} placeholder='Username'></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputField} placeholder='Password'></TextInput>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'red'
  },
  inputView: {
    borderBottomWidth: 2,
    borderColor: 'grey',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 20,

  },
  inputField: {
    fontSize: 24,
  },

});
