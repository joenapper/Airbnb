import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow';

const DestinationSearchScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          console.log(data, details);
          navigation.navigate('Guests');
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyDeMWv8SeVI9qt5N54Z0Hp8DfWfhoq16NA',
          language: 'en',
          types: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={item => <SuggestionRow item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default DestinationSearchScreen;
