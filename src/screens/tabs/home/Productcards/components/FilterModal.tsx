import React, { useState } from "react";
import { styles } from '../style'
import { TouchableOpacity, View, Text, Dimensions, ScrollView } from 'react-native'
import { Button } from "@react-native-material/core"
import { Dialog, Provider } from 'react-native-paper';
const { width, height } = Dimensions.get('screen')
export function FilterModal({ setVisible, visible, categoryList, onSelectItem }: any) {



    return (
        <View
            style={{
                zIndex: 2222,
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                position: "absolute",
                width,
                height,
                left: 0,
                top: 0,
            }}
        >
            <Provider>

                <Dialog style={{ backgroundColor: "#fff" }} visible={visible} onDismiss={() => setVisible(false)}>
                    <Dialog.Content>
                        <View style={{ height: 300 }}>
                            <ScrollView style={{ flex: 1 }}>
                                {
                                    categoryList.map((i, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            activeOpacity={0.8}
                                            onPress={() => onSelectItem(i)}
                                            style={[styles.innerView, {
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 0,
                                                // marginVertical: -5,
                                                marginHorizontal: 0
                                            }]}
                                        >
                                            <Text style={styles.innerText}>{i.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </Provider>
        </View>
    );
};

