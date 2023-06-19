/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteTask, updateTaskStatus} from '../../Redux/Task/Action';

const TaskCard = ({item, isCompleted, type}) => {
  const dispatch = useDispatch();
  const handleDeleteTask = () => {
    dispatch(deleteTask(item.id));
  };

  const handleUpdateTaskStatus = () => {
    dispatch(updateTaskStatus(item.id));
  };
  return (
    <View style={[styles.container, styles[`container_${type}`]]}>
      <View style={styles.inputView}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View>
        {item.status !== 'COMPLETED' && (
          <BouncyCheckbox
            isChecked={isCompleted}
            size={25}
            fillColor="#00D84A"
            unfillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={handleUpdateTaskStatus}
            disableBuiltInState={isCompleted}
          />
        )}
        {item.status == 'COMPLETED' && (
          <TouchableOpacity onPress={handleDeleteTask}>
            <Icon name="closecircle" size={24} color="#FF6263" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    backgroundColor: '#120E43',
    borderRadius: 5,
    marginVertical: 5,
  },
  container_COMPLETED: {
    backgroundColor: 'rgba(0, 216, 74, 0.5)',
  },
  container_INPROGRESS: {
    backgroundColor: 'rgba(255, 102, 102, 0.5)',
  },
  textContainer: {},
  inputView: {},
  title: {color: 'white', marginBottom: 5, fontSize: 17},
  description: {color: 'white', opacity: 50},
});
