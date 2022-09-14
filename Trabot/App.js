import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


import Navigation from './navigation';




const  App = () => {
  return (
    <SafeAreaView style={styles.root}>

      
      <Navigation />
    </SafeAreaView>
  );
  
   
  
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "grey",
  }
})
export default App;


