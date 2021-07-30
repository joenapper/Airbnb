import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// import HomeScreen from './screens/Home';
import Post from './components/Post';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
