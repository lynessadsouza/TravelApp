import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles.js';

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
  return (
    <FlatList
      horizontal={true}
      data={categories}
      //keyExtractor={(item) => item}
      renderItem={({ item }) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity onPress ={ () =>   onCategoryPress(item) }
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : { },
            ]}
          >
            <Text
              style={[
                styles.item,
                selected ? styles.selectedText : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);