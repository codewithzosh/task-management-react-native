import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({butonName,handleClick}) => {
  return (
    <View>
      <TouchableOpacity onPress={handleClick} style={styles.container}>
        <Text style={styles.buttonText}>{butonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#00D84A',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
