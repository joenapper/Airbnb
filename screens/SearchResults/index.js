import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Post from '../../components/Post';
import feed from '../../assets/data/feed';

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResultsScreen;
