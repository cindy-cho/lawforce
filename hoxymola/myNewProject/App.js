import { apisAreAvailable } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [first, setFirst] = useState('?????');
  const [second, setSecond] = useState('?????');
  const clickHandler = () => {
    setPeople([
      { name: 'AA', key: '2'},
      { name: 'BB', key: '1'},
    ]);
  }
  const clickHandler2 = () => {
    setFirst('?????');
    setSecond('?????');
  }
  const [people, setPeople] = useState([
    { name: 'mario', id: '1' },
    { name: 'luigi', id: '2' },
    { name: 'goomba', id: '3' },
    { name: 'yoshi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'bowser', id: '6' },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }
  
  return (



    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
        
      />

      {/* <ScrollView>
        
        {people.map(item => (
           <View key={item.key}>
             <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}

      </ScrollView> */}
    </View>

  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 5,
    width: 200,
  },
  bigText: {
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    backgroundColor: 'pink',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  normalText: {
    fontWeight: 'normal',
    fontSize: 15,
    textAlign: 'center',
    color: 'violet'
  },
  body: {
    backgroundColor: 'yellow',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    padding: 20,
  }
});