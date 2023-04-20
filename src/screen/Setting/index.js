import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { PADDING } from '../../outils/constantes';
import { Image } from 'react-native';
import { fakeSetting } from '../../../fakeData/fakeSetting';
import SettingItem from '../../components/SettingItem';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.userImg}
        />
        <View style={styles.userInfo}>
        <Text style={styles.userName}>NonoduWeb</Text>
        <Text style={styles.userEmail}>nonoweb17@gmail.com</Text>
        <Text>07 87 03 61 37 </Text>
      </View>
      </View>
      <FlatList data={fakeSetting} keyExtractor={item=>item.id} showsVerticalScrollIndicator={false} renderItem={({item})=>{
        return <SettingItem item={item}/>
      }}/>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems:'center',
    padding: 10,
    elevation: 5,
    borderRadius:50
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  userInfo:{
    marginLeft:15,
  },
  userName:{
    fontWeight:'bold',
    marginBottom:5
  },
  userEmail:{
    marginBottom:5
  }
});
