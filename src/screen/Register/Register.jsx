import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {getUserProfile, signUpUser} from '../../Redux/Auth/Action';
import {getData} from '../../config/AsyncStorage';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const {auth} = useSelector(store => store);

  const handleRegister = values => {
    console.log("req data - ",values);
    dispatch(signUpUser(values));
    // console.log(values);
  };

//   useEffect(() => {
//     const getUserProfileData = async () => {
//       const jwt = await getData();
//       console.log(jwt);
//       if (jwt) {
//         dispatch(getUserProfile(jwt));
//       }
//     };
  
//     getUserProfileData();
//   }, [auth.jwt]);

  useEffect(() => {
    if (auth.userProfile) {
      navigation.navigate('Home');
    }
  }, [auth.jwt]);

  const renderForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    errors,
  }) => (
    <>
      <TextInput
        style={[
          styles.input,
          touched.email && errors.email && styles.inputError,
        ]}
        placeholder="Full Name"
        onChangeText={handleChange('fullName')}
        onBlur={handleBlur('fullName')}
        value={values.fullName}
      />
      {touched.email && errors.email && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          touched.email && errors.email && styles.inputError,
        ]}
        placeholder="Email"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />
      {touched.email && errors.email && (
        <Text style={styles.error}>{errors.email}</Text>
      )}

      <TextInput
        style={[
          styles.input,
          touched.password && errors.password && styles.inputError,
        ]}
        placeholder="Password"
        secureTextEntry
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      {touched.password && errors.password && (
        <Text style={styles.error}>{errors.password}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>Manage Your Daily Task</Text>
        <Formik
          initialValues={{fullName: '', email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={handleRegister}>
          {renderForm}
        </Formik>
        <View style={styles.signup}>
          <Text style={styles.accountText}>
            If You Already Have An Account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.textButton}>
            <Text style={styles.textButtonText}>SIGNIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

    backgroundColor: '#758283',
  },
  heading: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
    marginBottom: 7,
  },
  box: {
    width: '100%',
    backgroundColor: 'white',
    zIndex: -1,
    padding: 30,
    elevation: 4,
    borderRadius: 10,
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#120E43',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  signup: {
    flexDirection: 'row',
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    marginLeft: 5,
  },
  textButtonText: {
    fontSize: 17,
    color: '#120E43',
  },
  accountText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Register;
