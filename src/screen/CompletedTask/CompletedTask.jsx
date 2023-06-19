/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React, { useEffect } from 'react';
import {TaskCard} from '../../components/TaskCard';
import { useDispatch, useSelector } from 'react-redux';
import { getCompletedTasks } from '../../Redux/Task/Action';

const CompletedTask = () => {
  const {task}=useSelector(store=>store)
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCompletedTasks())
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Completed Task</Text>

      <ScrollView>
        {task.completedTasks?.map((item, index) => (
          <TaskCard key={20 + index} item={item} isCompleted={true} type={'COMPLETED'}/>
        ))}
      </ScrollView>

      {/* <Text >pagination</Text> */}
    </View>
  );
};

export default CompletedTask;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    height: Dimensions.get('window').height,
    marginBottom:20
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'black',
    textAlign: 'center',
  },
});
