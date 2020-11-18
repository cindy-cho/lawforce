import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import InputTextField from './components/inputTextField';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{ marginTop: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./assets/logo.png')} style={{ height: 100, width: 100 }}></Image>
          <Text style={[styles.text, {marginTop: 10, fontSize: 22, fontWeight: '500'}]}>CPLA Judicial Precedent</Text>
        </View>
        <View style={{ marginTop: 48, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={require('./assets/facebook.png')} style={styles.socialLogo}></Image>
              <Text style={[styles.text, {color: 'white'}]}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source={require('./assets/google.png')} style={styles.socialLogo}></Image>
              <Text style={[styles.text, {color: 'white'}]}>Google</Text>
            </View>
          </TouchableOpacity>

        </View>

        <Text style={[styles.text, { color: '#ABB4BD', fontSize: 15, textAlign: 'center', marginVertical: 20 }]}>or</Text>

        <InputTextField title='Email'></InputTextField>
        <InputTextField 
          style={{ marginTop: 32, marginBottom: 8 }} 
          title='Password' 
          isSecure={ true }
        ></InputTextField>

        <Text style={[styles.text, styles.link, { textAlign: 'right' }]}>Forgot Password?</Text>

        <TouchableOpacity style={styles.submitContainer}>
          <Text style={[styles.text, { color: '#FFF', fontWeight: '600', fontSize: 16 }]}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.text, { fontSize: 14, color: '#ABB4BD', textAlign: 'center', marginTop: 24 }]}>
          Don't have an account? <Text style={[styles.text, styles.link]}> Register now</Text>
        </Text>
      </View>
      <StatusBar style='dark'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 30,
  },
  text: {
    color: '#1D2029',
  },
  image: {
    height: 18,
    width: 18
  },
  socialButton: {
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(171, 180, 189, 0.65)',
    borderRadius: 4,
    backgroundColor: '#242424',
    shadowColor: 'rgba(171, 180, 189, 0.35)',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },
  socialLogo: {
    height: 16,
    width: 16,
    marginRight: 8
  },
  link: {
    color: '#242424',
    fontSize: 14,
    fontWeight: '500'
  },
  submitContainer: {
    backgroundColor: '#242424',
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(255, 22, 84, 0.24)',
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  }
});
