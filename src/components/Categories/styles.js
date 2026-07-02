import { StyleSheet } from 'react-native';
export  const styles = StyleSheet.create({
   item: {
     fontSize: 12,
     fontWeight: 'bold',
     color: 'rgba(0,0,0,0.5)',
     marginRight: 17,
     paddingVertical: 14,
   },

   selectedItem: {
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    color: 'black',
   },
   itemContainer: {
    paddingVertical: 2,
    paddingHorizontal: 15,
   },
   selectedItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#4681A3',
   }
});
