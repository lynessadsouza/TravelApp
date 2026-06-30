import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from '../Title/index.js';
const HomeScreen = () => {

   return (
     <SafeAreaProvider style = {styles.safeView}>
  <View style ={styles.view}>
     <Title/>
     </View>

     </SafeAreaProvider>

   );
 };


 const styles = StyleSheet.create({
   safeView: {
     flex: 1,
     backgroundColor: 'red',
   },
   view: {
     flex: 1,

     backgroundColor: 'yellow',

   },
   text: {
     fontSize: 20,
     fontWeight: 'bold',
   },
   titleText: {
     fontSize: 24,
     fontWeight: 'bold',
     color: 'black',
     padding: 10,

   },
 });

 export default HomeScreen;

