import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../outils/constantes'

const Message = ({item}) => {

const isMine = ()=> {
    return item.user.id === 1
}

  return (
    <View style={[styles.container, {backgroundColor: isMine() ? COLORS.main : 'white', alignSelf: isMine()? 'flex-end': 'flex-start'}]}>
      <Text style={{color:isMine() ? 'white': null}}>{item.message}</Text>
      <Text style={[styles.date, {color:isMine() ? 'white': null}]}>{item.createdAt}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
     backgroundColor:'white',
     margin:5,
     padding: 10,
     borderRadius: 10,
     maxWidth: '90%',
    },
    date:{
        margin:5,
        alignSelf: 'flex-end'

    }
  })

export default Message