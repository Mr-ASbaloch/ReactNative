// Import necessary modules from React Native
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

// Functional component for the Login page
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ({ navigation }) => {
    // Handle login logic here
    console.log("Logging in with:", username, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={()=>{
        navigation.push('Home')
      }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text>
        {" "}
        If Not User ?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.push("Register");
          }}
        >
          <Text  style={styles.register}  >Register</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

// Functional component for the Register page
// const RegisterScreen = ({navigation}) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     // Handle registration logic here
//     console.log('Registering with:', username, password);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={(text) => setUsername(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Register</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// Styles using the StyleSheet module
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  register:{
    color:'blue',
    marginTop:12

}
});


// Export the LoginScreen and RegisterScreen components
export default LoginScreen;
