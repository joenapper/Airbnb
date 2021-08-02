import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const GuestsScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 20,
          marginHorizontal: 20,
          borderBottomWidth: 1,
          borderColor: 'lightgrey',
        }}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>-</Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>0</Text>

          <Pressable style={styles.button}>
            <Text style={{fontSize: 20, color: '#474747'}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GuestsScreen;
