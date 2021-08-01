import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// import HomeScreen from './screens/Home';
// import SearchResultsScreen from './screens/SearchResults';
import DestinationSearchScreen from './screens/DestinationSearch';
// import Post from './components/Post';
import feed from './assets/data/feed';

const post1 = feed[0];

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <HomeScreen /> */}
      {/* <Post post={post1} /> */}
      {/* <SearchResultsScreen /> */}
      <DestinationSearchScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
