

import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState(false);

  const deleteData = () => {
    setData(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Form Data</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        placeholder="Enter your name.."
        style={styles.inputs}
        value={name}
        onChangeText={(value) => {
          setName(value);
        }}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder="Enter your email.."
        style={styles.inputs}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
        }}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder="Enter your password.."
        secureTextEntry={true}
        style={styles.inputs}
        onChangeText={(value) => {
          setPassword(value);
        }}
        value={password}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Add Data"
          onPress={() => {
            setData(true);
          }}
        />
        <Button title="Delete Data" onPress={deleteData} />
      </View>

      <View style={styles.dataContainer}>
        {data ? (
          <View>
            <Text style={{color:'blue', fontSize:25}}>Data Preview:</Text>
            <Text   >Name: {name}</Text>
            <Text >Email: {email}</Text>
            <Text >Password: {password}</Text>
          </View>
        ) : (
          <Text style={{color:'red'}} >No Data Entered</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
  },
  inputs: {
    height: 40,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  },
  dataContainer: {
    marginTop: 20,
  },
});
