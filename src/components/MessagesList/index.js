import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { PADDING } from '../../outils/constantes';
import { useNavigation } from '@react-navigation/native';

const MessagesList = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.messageContainer} onPress={()=> navigation.navigate('MessageDetails', {item})}>
      <Image
        style={styles.messageImg}
        source={{
          uri: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      <View style={styles.messageInfo}>
        <View style={styles.date_name}>
          <Text style={styles.name}>{item.fullname}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 30,
  },
  messageImg: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  messageInfo: {
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
  },
  date_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});
export default MessagesList;
