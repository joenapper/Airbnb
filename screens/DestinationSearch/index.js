import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import SearchResults from '../../assets/data/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      <FlatList
        data={SearchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="location-pin" size={35} />
            </View>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
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

export default DestinationSearchScreen;
