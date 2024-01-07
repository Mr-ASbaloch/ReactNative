import React from "react";
import { View, Text } from "react-native";
// import Form from "./Form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./Form";
import Work from "./work";
import Api from "./Api";
import LoginScreen from "./Login";
import RegisterScreen from "./Register";


const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator >
      <stack.Screen name="Login" component={LoginScreen} />
      <stack.Screen name="Register" component={RegisterScreen} />
        <stack.Screen name="Home" component={Work} />
        <stack.Screen name="Form" component={Form} />
        <stack.Screen name="user"  options={{title:'User Data Api '}} component={Api} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
