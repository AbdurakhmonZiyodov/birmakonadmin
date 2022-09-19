import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './FilterModalItem.styles';

interface FilterModalItemProps {
    title: string;
    onPress?: () => void;
}

const FilterModalItem: React.FC<FilterModalItemProps> = ({ title, onPress }) => (
    <TouchableOpacity
        style={styles.modalItem}
        onPress={() => onPress && onPress()}
    >
        <Text style={styles.modalItemText}>{title}</Text>
    </TouchableOpacity>
)

export default FilterModalItem
