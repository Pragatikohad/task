// import libraries to create components
import React from "react";
import { Text, StyleSheet, View,TextInput  } from "react-native";
import CustomComponents from "./src/screens/CustomComponents";

// create a component that return some jsx / simple function
const App = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Search Bar</Text>
      <TextInput
        style={{
          height: 40,
          width:800,
          borderColor: 'gray',
          borderWidth: 1
        }}
        placeholder="search"
      />
      
      <CustomComponents/>
 
      </View>

  );
};

// Create a StyleSheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "black",
    marginTop:100,
  },
});

// export the file, so that we can use it elsewhere in our app
export default App;
