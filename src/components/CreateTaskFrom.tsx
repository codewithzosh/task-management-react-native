/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  Button,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CustomButton} from './CustomButton';
// import DateTimePicker from '@react-native-community/datetimepicker';

const CreateTaskFrom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Task </Text>

      <View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Task Title</Text>
          <TextInput style={styles.taskTitleInput} placeholder="Enter Title" />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Task Description</Text>
          <TextInput
            style={styles.taskTitleInput}
            placeholder="Enter Description"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Select Priority</Text>
          <View style={styles.selectInputWrapper}>
            <View style={styles.selectInputField}>
              <Text style={styles.priorityText}>High</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#00D84A"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {}}
              />
            </View>
            <View style={styles.selectInputField}>
              <Text style={styles.priorityText}>Medium</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#00D84A"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {}}
              />
            </View>
            <View style={styles.selectInputField}>
              <Text style={styles.priorityText}>Low</Text>
              <BouncyCheckbox
                size={25}
                fillColor="#00D84A"
                unfillColor="#FFFFFF"
                iconStyle={{borderColor: 'black'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {}}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <CustomButton butonName={'CREATE TASK'} />
        </View>
      </View>
    </View>
  );
};

// export default CreateTaskFrom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#120E43',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  taskTitle: {
    color: 'white',
  },
  taskTitleInput: {
    color: 'white',
    borderColor: '#383CC1',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  inputWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  priorityText: {
    color: 'white',
    marginRight: 5,
  },
  selectInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  selectInputField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  selectedDateText: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
