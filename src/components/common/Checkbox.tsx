import { CheckBox } from "@rneui/themed"
import React from "react"

interface IProps {
    title: string;
    onPress: (() => void);
    checked: boolean;
}

const Checkbox = ({ title, onPress, checked }: IProps) => {

    return (
        <CheckBox
            checked={checked}
            onPress={onPress}
            containerStyle={{
                backgroundColor: 'transparent'
            }}
            title={title}
        />
    )
}

export default Checkbox