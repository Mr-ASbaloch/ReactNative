import React from "react";
import { View, Image, Text } from "react-native";

const Display = () => {
  return (
    <View className='flex-1 justify-center bg-transparent'>
        <Text>image page,</Text>
      <Image
      className='w-1'
       source={require('./assets/image 3.png')}
      />
    </View>
  );
};

export default Display;
