import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, PADDING } from '../../outils/constantes'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SettingItem = ({item}) => {
  return (
   <TouchableOpacity style={styles.container}>
      <Text>{item.libelle}</Text>
   <AntDesign name='arrowright' size={20} color={COLORS.main}/>
   </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent :'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        marginTop:10,
        elevation: 5,
        borderRadius: 30,
    },
  })

export default SettingItem