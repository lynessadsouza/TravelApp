import React from 'react';
import { FlatList, Text } from 'react-native';
import { styles } from './styles.js';

const Categories = ({ categories }) => {
    return (
        <FlatList
        horizontal = {true}
            data={categories}
            renderItem={({ item }) => (
                <Text style = {styles.item}>{item}</Text>
            )}
        />
    );
};

export default React.memo(Categories);
