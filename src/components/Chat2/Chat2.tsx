import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput } from 'react-native'
import Header from '../Header'
import { styles } from './Chat2.styles'
import FilePaperIcon from 'react-native-vector-icons/AntDesign'
import MessageIcon from 'react-native-vector-icons/FontAwesome'

const Chat2 = () => {

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Header title='Мои сообщения' />
                <View style={styles.chatContainer}>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Поставщики</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.btn, backgroundColor: "transparent" }}>
                            <Text style={{ ...styles.btnText, color: "#131E3D" }}>Поставщики</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Поставщики</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Поставщики</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.fullBtn}>
                        <Text style={styles.btnText}>OOO Birmakon group</Text>
                    </TouchableOpacity>

                    <View style={styles.chats}>
                        <ScrollView>
                            <View style={styles.chatItem}>
                                <Text style={styles.chatItemText}>
                                    Рада приветствовать Вас в (Сайт названия)
                                    Я Ева Вайлет - виртуальный помощник
                                    службы поддержки. Если у Вас возник
                                    вопрос - задайте его в этом чате, и я с
                                    удовольствием отвечу на него.
                                </Text>
                            </View>
                            <View style={styles.chatItem}>
                                <Text style={styles.chatItemText}>
                                    Рада приветствовать Вас в (Сайт названия)
                                    Я Ева Вайлет - виртуальный помощник
                                    службы поддержки. Если у Вас возник
                                    вопрос - задайте его в этом чате, и я с
                                    удовольствием отвечу на него.
                                </Text>
                            </View>
                            <View style={styles.chatItem}>
                                <Text style={styles.chatItemText}>
                                    Рада приветствовать Вас в (Сайт названия)
                                    Я Ева Вайлет - виртуальный помощник
                                    службы поддержки. Если у Вас возник
                                    вопрос - задайте его в этом чате, и я с
                                    удовольствием отвечу на него.
                                </Text>
                            </View>
                        </ScrollView>


                        <View style={styles.chatBottomInput}>
                            <View style={{
                                flexDirection: "row",
                                alignItems: 'center',
                            }}>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        flexDirection: "row",
                                        backgroundColor: "rgba(217, 217, 217, 0.5)",
                                        borderBottomLeftRadius: 8,
                                        borderBottomRightRadius: 8,
                                        flex: 1,
                                        marginLeft: 16
                                    }}
                                >
                                    <TouchableOpacity style={{ marginHorizontal: 7 }}>
                                        <FilePaperIcon name='paperclip' size={25} color={"rgba(137, 137, 137, 0.5)"} />
                                    </TouchableOpacity>
                                    <TextInput
                                        placeholder='Ваше сообщение'
                                        placeholderTextColor={'#999999'}
                                        // multiline={true}
                                        style={{
                                            // flex: 1,
                                            color: "#999"
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={{ marginLeft: 27, marginRight: 15, opacity: 0.5 }}>
                                    <MessageIcon name='telegram' size={25} color={"rgba(137, 137, 137, 0.5)"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Chat2