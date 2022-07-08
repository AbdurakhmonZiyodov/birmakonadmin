import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SkripkaIcon, TelegramIcon } from '../assets/icons/icon';
import { COLORS } from '../constants/color';

interface IChatProps {
  onPress: () => void;
}

const Chat = ({ onPress }: IChatProps) => {
  return (
    <View style={{ marginTop: 30, marginHorizontal: 16 }}>
      <View
        style={{
          backgroundColor: COLORS.buttonColor,
          paddingVertical: 18,
          paddingHorizontal: 15,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}>
        <Text style={{ fontSize: 15, fontWeight: '500', color: COLORS.white }}>
          Чат поддержки
        </Text>
      </View>
      <View
        style={{
          paddingTop: 15,
          paddingHorizontal: 15,
          backgroundColor: COLORS.lightGray2,
          height: 235,
          position: 'relative',
        }}>
        <View
          style={{
            paddingTop: 15,
            paddingHorizontal: 15,
            paddingBottom: 15,
            backgroundColor: 'rgba(212, 212, 212, 0.5)',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '400',
              color: COLORS.textColor1,
            }}>
            Рада приветствовать Вас в (Сайт названия) Я Ева Вайлет - виртуальный
            помощник службы поддержки. Если у Вас возник вопрос - задайте его в
            этом чате, и я с удовольствием отвечу на него.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: 16,
            paddingVertical: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <View
            style={{
              flex: 0.8,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                position: 'absolute',
                top: 0,
                left: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SkripkaIcon />
            </View>
            <TextInput
              style={{
                paddingLeft: 30,
                paddingVertical: 7,
                backgroundColor: 'rgba(217, 217, 217, 0.5)',
              }}
              placeholder="Ваше сообщение"
            />
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity onPress={onPress}>
              <View
                style={{
                  width: 35,
                  height: 36,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(217, 217, 217, 0.5)',
                }}>
                <TelegramIcon />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chat;
