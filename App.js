/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//this is test commit  
//fff
import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
//import { Text } from 'react-native';

import {

  Text,
} from 'react-native';
//test change in develop
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style = {styles.safeView}>
 <View style ={styles.view}>
      <Text style ={styles.titleText}>Travel App </Text>
    </View>
    
    </SafeAreaProvider>
   
  );
}
   


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

export default App;
