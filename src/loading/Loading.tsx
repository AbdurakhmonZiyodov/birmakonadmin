import React from "react"
import { View, Dimensions, Text } from 'react-native'
import Lottie from 'lottie-react-native';

const { width } = Dimensions.get('window')
interface IProps {
    title?: string;
}
export default ({ title }: IProps) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <View>
                <Text style={{
                    color: "rgba(0, 0 , 0, 0.8)",
                    fontSize: 18,
                    fontWeight: "500"
                }}>
                    {title}
                </Text>
            </View>
            < Lottie
                style={{
                    width: width * 0.6,
                    height: width * 0.6
                }}
                autoPlay
                loop
                source={require("../loading/94391-red-colour-loading-animation.json")}
            />
        </View>
    )
}