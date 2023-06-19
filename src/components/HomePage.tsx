/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ScrollBar from './ScrollView';
import Products from './Products';
import TodaysTask from './TodaysTask';
import BottomBar from './BottomBar/BottomBar';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TodaysTask />
          </View>

          <View style={styles.createFormView}>
            <BottomBar />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('window').height,
    position: 'relative',
  },
  createFormView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
