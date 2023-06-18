import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React from 'react';
import AddData from "./src/AddData";
import FetchData from "./src/FetchData";
import Chart from "./src/Chart";
import FetchData_cricket_ball from "./src/FetchData_cricket_ball";
import AddData_cricket_ball from "./src/AddData_cricket_ball";

const App = () => {

  return (
    <View style={styles.container}>
      {/*<AddData />*/}
      {/*<FetchData />*/}
      {/*<Chart />*/}
      {/*<AddData_cricket_ball />*/}
      <FetchData_cricket_ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 20
  },
});

export default App;