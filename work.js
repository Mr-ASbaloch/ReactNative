import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Image from "./Image";
import Display from "./Image";
const stack = createNativeStackNavigator();
const Work = ({ navigation }) => {
  return (
    <View className="flex-1 justify-center align-middle  items-center  mb-3">
      {/* <Image/>
       */}
      {/* <Display /> */}
      <View className='text-center bg-fuchsia-300 p-10 rounded-lg shadow-md hover:animate-spin '>
      <Text className='text-center text-4xl p-2 font-bold '>😎 </Text>
        <Text className='text-center text-2xl font-semibold text-blue-800 '>Mobile & App </Text>
        <Text className='  text-xl text-center p-1' >website Design </Text>
        <Text className=" text-3xl  font-bold   text-center text-red-700  rounded-lg p-3 mb-3">
          Home Page {" "}
        </Text>
        <Button
          title="move To Form  page"
          onPress={() => {
            navigation.push("Form");
          }}
        />
      </View>
    </View>
  );
};

export default Work;
