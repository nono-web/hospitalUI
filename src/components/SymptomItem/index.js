import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { PADDING } from '../../outils/constantes';

const SymptomItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <View>
        <Image style={styles.img} source={item.img} />
      </View>
      <Text style={styles.libelle}>{item.libelle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollableListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
    marginRight: 15,
    borderRadius: 20
  },
  libelle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  img:{
    width: 30,
    height: 30,
    marginRight: 5
  }
});

export default SymptomItem;
