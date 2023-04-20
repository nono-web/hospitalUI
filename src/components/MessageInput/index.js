import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, PADDING } from '../../outils/constantes';
const MessageInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Message de chat" />
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="send"
          style={styles.send}
          size={24}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    marginRight: 5,
    elevation: 10,
  },
  send: {
    backgroundColor: COLORS.main,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    borderRadius: 50 / 2,
    overflow: 'hidden',
  },
});

export default MessageInput;
