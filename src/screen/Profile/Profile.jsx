import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TaskCard} from '../../components/TaskCard';
import {useDispatch, useSelector} from 'react-redux';
import {getAllTasks} from '../../Redux/Task/Action';
import { getData } from '../../config/AsyncStorage';
import { getUserProfile, logoutUserAction, updateUserProfile } from '../../Redux/Auth/Action';
import { Login } from '../Login';

const Profile = ({navigation}) => {
 
  const [profilePic, setProfilePic] = useState(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const {task,auth} = useSelector(store => store);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(auth.userProfile?.fullName);

  const selectImageFromCamera = () => {
    // Implement your logic to launch the camera and capture a photo
  };

  const selectImageFromLibrary = async () => {
    console.warn('select image from  library');
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });

      setProfilePic(response[0].uri);
      dispatch(updateUserProfile({profileImage:response[0].uri}))
    } catch (error) {
      console.warn('Error selecting image:', error);
    }
  };

  const updateUsername = () => {
    console.log('Updating username:', username);
    dispatch(updateUserProfile({fullName:username}))
    setIsEditingUsername(false);
  };

  // useEffect(() => {
  //   // dispatch(getAllTasks());
  //   console.log(' task ---- ', task);
  // }, [auth.userProfile]);

  useEffect(() => {
    const getUserProfileData = async () => {
      const jwt = await getData("jwt");
      console.log(jwt);
      if (jwt) {
        dispatch(getUserProfile(jwt));
      }

      console.log('jwt async storate ', jwt);
    };

    getUserProfileData();
    dispatch(getAllTasks());

    console.log('--------------');
  }, []);
const handleLogout=()=>{
  dispatch(logoutUserAction())
  navigation.navigate('Login')
}
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20,paddingHorizontal:10}}>
        <TouchableOpacity onPress={selectImageFromLibrary}>
          <Image
            source={{
              uri:
                profilePic ||
                auth.userProfile?.profileImage ||
                'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png',
            }}
            style={{width: 150, height: 150, borderRadius: 75}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
          <View style={{}}>
            {/* <Text style={{fontSize: 16}}>{username} </Text> */}
            {isEditingUsername ? (
              <TextInput
                style={{fontSize: 16}}
                placeholder="Enter username"
                value={username}
                onChangeText={text => setUsername(text)}
                onBlur={updateUsername}
                autoFocus
              />
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'black',
                    marginRight: 10,
                  }}>
                  {username || auth.userProfile?.fullName}
                </Text>
                <TouchableOpacity onPress={() => setIsEditingUsername(true)}>
                  <Icon name="pencil" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableOpacity>

        <View style={styles.tasks}>
          <View style={[styles.taskDetail, styles.completedTaskDetail]}>
            <Text style={styles.completedValue}>{task.completedTasks?.length}</Text>
            <Text style={styles.completedText}>Completed</Text>
          </View>
          <View style={[styles.taskDetail, styles.inProgressTaskDetail]}>
            <Text style={styles.inProgressValue}>{task.tasks?.length - task.completedTasks?.length}</Text>
            <Text style={styles.inProgressText}>Incompleted</Text>
          </View>
        </View>

        <View style={styles.taskContainer}>
          <Text style={styles.allTaskText}>All Task</Text>
          <>
            {task.tasks.map(item => (
              <TaskCard item={item} type={item.status} />
            ))}
          </>
        </View>

        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
      
  );
};

export default Profile;

const styles = StyleSheet.create({
  tasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom:30,
    // paddingHorizontal: 10,
  },
  allTaskText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginBottom: 20,
  },
  taskDetail: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  completedValue: {
    color: 'white',
  },
  completedText: {
    fontWeight: '500',
    color: 'white',
  },
  inProgressText: {
    color: 'white',
  },
  inProgressValue: {
    color: 'white',
  },
  completedTaskDetail: {
    backgroundColor: 'green',
  },
  inProgressTaskDetail: {
    backgroundColor: 'orange',
  },
  logoutButton:{
    backgroundColor:'#E6425E',
    padding:20,
    borderRadius:5,
    width:'100%',
    margin:10,
    // position:"absolute",
    bottom:0

  },
  logoutText:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'white'
  }
});
