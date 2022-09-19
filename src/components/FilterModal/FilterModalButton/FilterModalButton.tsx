import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { BottomIcon } from '../../../assets/icons/icon';
import { styles } from './FilterModalButton.styles'

interface FilterModalButtonProps {
    onPress?: () => void;
    title: string;
    iconVisibile?: boolean;
    hasIcon?: boolean;
}

const FilterModalButton: React.FC<FilterModalButtonProps> = ({
    title,
    onPress,
    iconVisibile = false,
    hasIcon
}) => (
    <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => onPress && onPress()}
    >
        <Text style={styles.buttonText}>{title}</Text>
        {!!hasIcon && <BottomIcon style={iconVisibile && styles.activeIcon} />}
    </TouchableOpacity>
)

export default FilterModalButton;