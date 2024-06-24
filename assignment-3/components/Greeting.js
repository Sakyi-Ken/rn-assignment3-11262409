import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
export default function Greeting() {
  return (
    <View>
      <View style={headingStyles. container}>
        <View>
          <Text style={headingStyles.headingText}>Hello , Devs</Text>
          <Text>14 tasks today</Text>
        </View>
          <Image source={require('../assets/profile1.png')} style={headingStyles.profile} />
      </View>
      <TextInput
        style={headingStyles.searchBar}
          placeholder='Search'
          placeholderTextColor='black'>
          </TextInput>

          <Text>Categories</Text>
          <ScrollView horizontal={true}>
            <View>
              <Text>Exercise</Text>
              <Text>12 Tasks</Text>
              <Image/>
            </View>
          </ScrollView>

          <Text>Ongoing Task</Text>
          <ScrollView>
            <View>
              <Text>Mobile App Development</Text>
            </View>
          </ScrollView>
    </View>
  )
};

const headingStyles = StyleSheet.create({
  container: {
    backgroundColor: '#E8D1BA',
    padding: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headingText: {
    color: 'black',
    fontSize: 40,
  },
  profile: {
    width: 50,
    height: 50,
  },
  searchBar:{
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 300,
    marginLeft: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 17
  }
});