import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import AddData from "./src/AddData";
import FetchData from "./src/FetchData";

export default function App() {

  return (
    <View style={styles.container}>
      <AddData />
      <FetchData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
