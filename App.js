import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Router from './navigation/Router';

const App: () => Node = () => {
  return (
    <>
      <StatusBar />
      <Router />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
