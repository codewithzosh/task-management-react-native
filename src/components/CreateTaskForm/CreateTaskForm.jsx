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
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CustomButton} from '../CustomButton';

import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch} from 'react-redux';
import {createTask} from '../../Redux/Task/Action';

const CreateTaskFrom = ({closeOpenCreateTask}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [priority, setPriority] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const dispatch = useDispatch();

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);

    if (mode === 'date') {
      setMode('time');
    }

    if (mode === 'time') {
      setShow(false);
      setMode('date')
    }
  };

  const handleOpenDateTimePicker = () => {
    setMode('date');
    setShow(true);
  };

  const handleSelectPriority = priority => {
    setSelectedPriority(priority);
  };

  const handleCreateTask = () => {
    const taskData = {
      title,
      description,
      priority: selectedPriority,
      deadline: date,
    };
    dispatch(createTask(taskData));
    closeOpenCreateTask()
    setDate(new Date())
  };

  const handleInputChange = (name, value) => {
    if (name == 'title') setTitle(value);
    if (name === 'description') setDescription(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Task </Text>

      <View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Task Title</Text>
          <TextInput
            style={styles.taskTitleInput}
            placeholder="Enter Title"
            placeholderTextColor="gray"
            name="title"
            value={title}
            onChangeText={value => handleInputChange('title', value)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Task Description</Text>
          <TextInput
            style={styles.taskTitleInput}
            placeholder="Enter Description"
            placeholderTextColor="gray"
            value={description}
            name="description"
            onChangeText={value => handleInputChange('description', value)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Select Priority</Text>
          <View style={styles.selectInputWrapper}>

            <View style={styles.priorityContainer}>
              <TouchableOpacity
                onPress={() => handleSelectPriority('high')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedPriority === 'high' ? '#00D84A' : '#120E43',
                    borderColor: '#00D84A',
                  },
                ]}>
                <Text
                  style={[
                    styles.highPriority,
                    styles.priorityText,
                    {color: selectedPriority === 'high' ? 'white' : '#00D84A'},
                  ]}>
                  High
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectPriority('medium')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedPriority === 'medium' ? '#F4BE2C' : '#120E43',
                    borderColor: '#F4BE2C',
                  },
                ]}>
                <Text
                  style={[
                    styles.mediumPriority,
                    styles.priorityText,
                    {
                      color:
                        selectedPriority === 'medium' ? 'white' : '#F4BE2C',
                    },
                  ]}>
                  Medium
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectPriority('low')}
                style={[
                  styles.button,
                  {
                    backgroundColor:
                      selectedPriority === 'low' ? '#FF6263' : '#120E43',
                    borderColor: '#FF6263',
                  },
                ]}>
                <Text
                  style={[
                    styles.lowPriority,
                    styles.priorityText,
                    {color: selectedPriority === 'low' ? 'white' : '#FF6263'},
                  ]}>
                  Low
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.taskTitle}>Deadline</Text>
          <TouchableOpacity
            onPress={() => handleOpenDateTimePicker()}
            style={styles.datePickerButton}>
            {!show && date && (
              <Text style={styles.datePicker}>{date?.toLocaleString()}</Text>
            )}
          </TouchableOpacity>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onDateChange}
            />
          )}
        </View>
        <View style={styles.inputWrapper}>
          <CustomButton
            handleClick={handleCreateTask}
            butonName={'CREATE TASK'}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateTaskFrom;

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
    marginBottom: 5,
  },
  taskTitleInput: {
    color: 'white',
    borderColor: '#3944F7',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  deadlineButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  datePickerButton: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    borderColor: '#3944F7',
  },
  datePicker: {
    color: 'white',
  },
  priorityContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  priorityText: {
    fontSize: 17,
  },
  highPriority: {
    color: '#00D84A',
  },
  mediumPriority: {
    color: '#F4BE2C',
  },
  lowPriority: {
    color: '#FF6263',
  },
  allPrioity: {
    color: '#120E43',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});
