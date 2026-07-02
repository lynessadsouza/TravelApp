import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Title } from '../../components/Title/index.js';
import { styles } from './style.js';
import Categories from '../../components/Categories/index.js';

const HomeScreen = () => {

  const [selectedCategory, setSelectedCategory] = React.useState('All');

   return (
     <SafeAreaProvider style = {styles.mainContainer}>
  <View style ={styles.container}>

      <Title text = 'Where do' style = { { fontWeight: 'normal' }} />
      <Title text = 'you want to go?'/>
      <Title text = 'Explore Attractions ' style={styles.subtitle}/>
      <Categories selectedCategory= {selectedCategory} onCategoryPress={setSelectedCategory} categories = {['All', 'Popular', 'Historical', 'Adventure', 'Romantic', 'Family',]}/>

     </View>

     </SafeAreaProvider>

   );
 };

 export default HomeScreen;

