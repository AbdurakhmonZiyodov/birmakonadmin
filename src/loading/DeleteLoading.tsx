import React from "react"
import { View, Dimensions, Text } from 'react-native'
import Lottie from 'lottie-react-native';

const { width } = Dimensions.get('window')
interface IProps {
    title?: string;
}
export default () => {
    return (
        <Lottie
            autoPlay
            loop
            style={{
                width: 130,
                height: 130
            }}
            source={require("../loading/delete.json")}
        />
    )
}