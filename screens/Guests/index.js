import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              -
            </Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{adults}</Text>

          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setAdults(adults + 1)}>
              +
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: '#8d8d8d'}}>Ages 2-12</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setChildren(Math.max(0, children - 1))}>
              -
            </Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{children}</Text>

          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setChildren(children + 1)}>
              +
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: '#8d8d8d'}}>Under 2</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setInfants(Math.max(0, infants - 1))}>
              -
            </Text>
          </Pressable>

          <Text style={{marginHorizontal: 20, fontSize: 16}}>{infants}</Text>

          <Pressable style={styles.button}>
            <Text
              style={{fontSize: 20, color: '#474747'}}
              onPress={() => setInfants(infants + 1)}>
              +
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
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
