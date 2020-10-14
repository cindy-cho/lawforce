import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import FlatButton from '../shared/button';

export default function Form() {
    
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: ''  }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput 
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        
                        <FlatButton onPress={props.handleSubmit} text='SUBMIT' />
                    </View>
                )}
            </Formik>
        </View>
    )
}