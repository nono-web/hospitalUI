import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS, PADDING } from '../../outils/constantes';
import { FakeActivity } from '../../../fakeData/fakeActivity';
import ActivityItem from '../../components/ActivityItem';
import { FakeSymptome } from '../../../fakeData/fakeSymptome';
import SymptomItem from '../../components/SymptomItem';
import { fakeDoctor } from '../../../fakeData/fakeDoctor';

const Home = () => {
  const [showAllDoctors, setShowAllDoctors] = useState(false);

  function handleShowAllDoctors() {
    setShowAllDoctors(!showAllDoctors);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.userName}>NonoduWeb</Text>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.userImg}
        />
      </View>
      <FlatList
        data={FakeActivity}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.scrollableList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ActivityItem item={item} />;
        }}
      />

      <View style={styles.title}>
        <Text style={styles.titleBold}> Quel symptome avez vous ? </Text>
      </View>

      <FlatList
        data={FakeSymptome}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.scrollableList}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SymptomItem item={item} />;
        }}
      />

      <View style={styles.title_space_between}>
        <Text style={styles.titleBold}> Liste des docteurs </Text>
        <TouchableOpacity onPress={handleShowAllDoctors}>
          <Text style={styles.link}>
            {showAllDoctors ? 'Afficher moins' : 'Tout Afficher'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.doctorContainer}>
  {showAllDoctors ? (
    fakeDoctor.map((doctor, index) => (
      <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
        <Image source={{uri : `${doctor.img}`}} style={styles.doctorImg}/>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctor.fullname}</Text>
          <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
        </View>
      </TouchableOpacity>
    ))
  ) : (
    [...fakeDoctor].splice(0, 3).map((doctor, index) => (
      <TouchableOpacity key={doctor.id} style={styles.doctorCard}>
        <Image source={{uri : `${doctor.img}`}} style={styles.doctorImg}/>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctor.fullname}</Text>
          <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
        </View>
      </TouchableOpacity>
    ))
  )}
</View>

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
  },
  userName: {
    fontSize: 17,
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  scrollableList: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },

  title: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  title_space_between: {
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleBold: {
    fontWeight: 'bold',
  },
  link: {
    color: COLORS.main,
  },
  doctorContainer: {
    marginTop: 15,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  doctorCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    marginBottom: 20,
    borderRadius: 15,
  },
  doctorImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginRight: 15,
  },
  doctorInfo: {
    flexDirection: 'column',
  },
  doctorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  doctorSpeciality: {
    backgroundColor: COLORS.main,
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    borderRadius: 20,
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    overflow: 'hidden',
  },
});
