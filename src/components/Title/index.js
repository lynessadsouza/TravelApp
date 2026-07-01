import React from 'react';
import {  Text } from 'react-native';
import styles from './titleStyles.js';


export const Title = ({ text, style  }) => {
   return (
   <Text  style ={[styles.title, style]}>   { text }  </Text>
   );
};
