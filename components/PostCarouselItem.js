import React from 'react';
import {View, Text, Image, useWindowDimensions, StyleSheet} from 'react-native';

const PostCarouselItem = ({post}) => {
  const width = useWindowDimensions().width;

  return (
    <View style={[styles.container, {width: width - 60}]}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed(s) {post.bedroom} bedroom(s)
          </Text>

          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          <Text style={styles.prices}>
            <Text style={styles.price}>£{post.newPrice} </Text>/ night
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 15,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PostCarouselItem;
