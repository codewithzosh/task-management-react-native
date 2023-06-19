/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ProductCard() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.productImage}
        source={{
          uri: 'https://rukminim1.flixcart.com/image/612/612/xif0q/track-pant/h/r/k/5xl-tbljogj36-gyjogj37-tripr-original-imagmenprhxpmjzy.jpeg?q=70',
        }}
        resizeMode="contain"
      />
      <View style={styles.cardBody}>
        <Text style={styles.cartTitle}>Pack of 2 Men Solid...</Text>
        <View style={styles.priceView}>
          <Text style={styles.offPrice}>$39.99</Text>
          <Text style={styles.disccount}>50% off</Text>
          <Text style={styles.price}>$19.99</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 300,
    borderWidth: 1,
    borderColor: '#758283',
    margin: 5,
    borderRadius:5
  },
  cardHeading: {},
  cardBody: {
    padding: 8,
  },
  cartTitle: {fontWeight: 'bold', fontSize: 15},
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  disccount: {
    color: 'green',
  },
  offPrice: {
    textDecorationLine: 'line-through',
  },
  price: {
    color: 'black',
    fontWeight: '500',
  },
  productImage: {
    width: 189,
    height: 200,
    borderTopLeftRadius:5,
    borderTopRightRadius:5
  },
});
