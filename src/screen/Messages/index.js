import { View, Text,StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { fakeChats } from '../../../fakeData/fakeChats';
import MessagesList from '../../components/MessagesList';
import { PADDING } from '../../outils/constantes';

const Messages = () => {
  return (
    <FlatList
    style={styles.container}
    data={fakeChats}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
    return <MessagesList item={item}/>
    }}
  />
  )
}

export default Messages

const styles = StyleSheet.create({
    container: {
     paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
 
    },
  })