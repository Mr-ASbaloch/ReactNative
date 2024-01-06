import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";

const Sample = () => {
  const list = [
    {
      id: 1,
      name: "saeed",
    },
    {
      id: 1,
      name: "ali",
    },
    {
      id: 1,
      name: "Ahmad",
    },
  ];
  return (
    <View>
      <Text style={styles.sampleBox}>sample page for test </Text>
      <TextInput placeholder="enter your name here" style={styles.input} />
    </View>
  );
};

export default Sample;

const styles = StyleSheet.create({
  sampleBox: {
    backgroundColor: "red",
    color: "white",
    marginTop: 12,
    padding: 12,
  },
  input: {
    borderColor: "green",
    borderWidth: 2,
  },
});
