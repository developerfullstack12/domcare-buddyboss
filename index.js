import React from "react";
import { NativeModules } from "react-native";
import MyCustomLoginScreen from "./src/Login";
import Article from "./src/Articles";

export const applyCustomCode = (externalCodeSetup) => {
  externalCodeSetup.navigationApi.replaceScreenComponent(
    "LoginScreen",
    MyCustomLoginScreen
  );
  externalCodeSetup.navigationApi.addNavigationRoute(
    "LoginScreen",
    MyCustomLoginScreen,
    "Auth" // "Auth" | "noAuth" | "Main" | "All"
  );
 

  //externalCodeSetup.navigationApi.replaceScreenComponent("ArticleScreen", Article);
};

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// export const applyCustomCode = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="LoginScreen">
//         <Stack.Screen name="LoginScreen" component={MyCustomLoginScreen} />
//         <Stack.Screen name="ArticleScreen" component={Article} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
