import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fakeConversations } from '../../../fakeData/fakeConversations';
import Message from '../../components/Message';
import MessageInput from '../../components/MessageInput';

const MessageDetails = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: item.fullname });
  });
  return (
    <View style={styles.container}>
      <FlatList
        data={fakeConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Message item={item} />;
        }}
      />
      <MessageInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
});

export default MessageDetails;
