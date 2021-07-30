import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      <Text style={styles.bedrooms}>1 bed 1 bathroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Entire Flat. Puerto de la cruz lrmLorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>£36</Text>
        <Text style={styles.price}> £30 </Text>
      </Text>

      <Text style={styles.totalPrice}>£230 total</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});

export default Post;
