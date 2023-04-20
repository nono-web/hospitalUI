import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor="#ecf0f1" />
        <Routes />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
