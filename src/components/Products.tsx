/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <View style={styles.productCardWraper}>
        {[1, 1, 1, 1, 1].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal:10
    paddingHorizontal: 5,
  },
  heading: {
    padding: 8,
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productCardWraper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
