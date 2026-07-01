import React from 'react';
import { FlatList, Text } from 'react-native';
import { styles } from './styles.js';

const Categories = ({ categories , selectedCategory }) => {
    return (
        <FlatList
        horizontal = {true}
            data={categories}
            renderItem={({ item }) => (
                <Text style = {[styles.item , selectedCategory === item ? styles.selectedItem : {}]}>{item}</Text>
            )}
        />
    );
};

export default React.memo(Categories);
