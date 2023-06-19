/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ScrollBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Srolle Card</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardWrapper}>
        {[1, 1,  1, 1, 1, 1].map((item,index)=> (
          <View key={index+10} style={[styles.card]}>
            <Text style={styles.textStyle}>scroll</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    fontSize: 25,
    color: 'teal',
  },
  cardWrapper: {
    padding: 10,
    // elevation:false,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    margin:10
  },
  textStyle: {
    color: 'blue',
  },
});
