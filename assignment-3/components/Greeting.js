import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
export default function Greeting() {
  return (
    <ScrollView>
      <View style={headingStyles. container}>
        <View>
          <Text style={headingStyles.headingText}>Hello , Devs</Text>
          <Text>14 tasks today</Text>
        </View>
          <Image source={require('../assets/profile1.png')} style={headingStyles.profile} />
      </View>
      <View style={headingStyles.filterContainer}>
        <View style={headingStyles.searchContainer}>
        <Image source={require('../assets/search.png')} style={headingStyles.searchIcon} />
        <TextInput
          style={headingStyles.searchBar}
            placeholder='Search'
            placeholderTextColor='black'>
        </TextInput>
        </View>
        <Image source={require('../assets/Filter.png')} style={headingStyles.filterIcon} />
      </View>

      <Text>Categories</Text>
      <ScrollView horizontal={true}>
        <View style={headingStyles.categoriesContainer}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image style={headingStyles.catImage1} source={require('../assets/young-woman.png')}/>
        </View>
        <View style={headingStyles.categoriesContainer}>
          <Text>Exercise</Text>
          <Text>12 Tasks</Text>
          <Image style={headingStyles.catImage2} source={require('../assets/young-woman-2.png')}/>
        </View>
      </ScrollView>

      <Text>Ongoing Task</Text>
      <ScrollView>
        <View style={headingStyles.taskContainer}>
          <Text>Mobile App Development</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text>Web Development</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text>Cooking Sessions</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text>Praying Sessions</Text>
        </View>
      </ScrollView>
    </ScrollView>
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