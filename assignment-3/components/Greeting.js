import React from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView} from 'react-native';
export default function Greeting() {
  return (
    <ScrollView style={headingStyles.container}>
      <View style={headingStyles. header}>
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

      <Text style={{fontSize: 25, marginBottom: 15}}>Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={headingStyles.categoriesContainer}>
        
          <Text style={headingStyles.categoryHeader}>Study</Text>
          <Text style={headingStyles.categoryText}>12 Tasks</Text>
          <Image style={headingStyles.catImage1} source={require('../assets/young-woman.png')}/>
        </View>
        <View style={headingStyles.categoriesContainer}>
          <Text style={headingStyles.categoryHeader}>Exercise</Text>
          <Text style={headingStyles.categoryText}>12 Tasks</Text>
          <Image style={headingStyles.catImage2} source={require('../assets/young-woman-2.png')}/>
        </View>
      </ScrollView>

      <Text style={{fontSize: 25, marginBottom: 10, marginTop: 30}}>Ongoing Task</Text>
      <ScrollView>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Mobile App Development</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Web Development</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Cooking Sessions</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Praying Sessions</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Working out </Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Washing</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Tutoring Sessions</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Studying Sessions</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Driving Lessons</Text>
        </View>
        <View style={headingStyles.taskContainer}>
          <Text style={headingStyles.taskText}>Marketing Seasons</Text>
        </View>
      </ScrollView>
    </ScrollView>
  )
};

const headingStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F0E8',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 35,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    width: 280,
    backgroundColor: '#FBF9F7',
    alignItems: 'center',
  },
  filterIcon: {
    width: 50,
    height: 50,

  },
  searchIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  categoriesContainer: {
    backgroundColor: '#FBF9F7',
    padding: 10,
    borderRadius: 15,
    marginRight: 10,
    width: 186,
    height: 192,
  },

  catImage1: {
    width: 120,
    height: 115,
    marginLeft: 35,
  },
  catImage2: {
    width: 120,
    height: 125,
    marginLeft: 30,
  },
  categoryHeader: {
    fontSize: 18,
    color: 'black',
  },
  categoryText: {
    fontSize: 13,
    color: 'gray',
  },

  taskContainer: {
    backgroundColor: '#FBF9F7',
    width: 350,
    height: 128,
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#E8D1BA', 
    justifyContent: 'center',
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
    padding: 10,
    width: 85,
    borderRadius: 15,
    backgroundColor: '#FBF9F7',
    fontSize: 17
  },
  taskText: {
    fontSize: 16,
    color: 'black',
  },

});