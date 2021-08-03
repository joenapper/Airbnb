import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import SearchResults from '../../assets/data/search';
import {useNavigation} from '@react-navigation/native';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Guests')}>
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
    </Pressable>
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
