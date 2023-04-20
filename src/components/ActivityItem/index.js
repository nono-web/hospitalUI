import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { PADDING } from '../../outils/constantes';
import SvgMedecin from '../../../svgs/SvgMedecin';

const ActivityItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <SvgMedecin />
      <Text style={styles.mainText}>{item.mainText}</Text>
      <Text style={styles.subText}>{item.subText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  scrollableListItem: {
    flexDirection: 'column',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
    marginRight: 15,
    elevation: 5,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    marginTop: 10,
    fontSize: 12,
  },
});

export default ActivityItem;