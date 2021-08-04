import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const SuggestionRow = ({item}) => (
  <View style={styles.row}>
    <View style={styles.iconContainer}>
      <Icon name="location-pin" size={35} />
    </View>
    <Text>{item.description}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#d4d4d4',
    padding: 7,
    borderRadius: 10,
    marginRight: 15,
  },
});

export default SuggestionRow;
