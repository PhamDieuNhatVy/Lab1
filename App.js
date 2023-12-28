import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Ex1 from './project1';
import Ex2 from './project2';
import Project4 from './project4';
import Project3 from './project3';
import Project5 from './project5';
import Project6 from './project6';
import Project7 from './project7';
import Project8 from './project8';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Ex1')}>
          <Text>Project 1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Ex2')}>
          <Text>Project 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project3')}>
          <Text>Project 3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project4')}>
          <Text>Project 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project5')}>
          <Text>Project 5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project6')}>
          <Text>Project 6</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project7')}>
          <Text>Project 7</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('Project8')}>
          <Text>Project 8</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Ex1" component={Ex1} />
        <Stack.Screen name="Ex2" component={Ex2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 15,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#2adb68', 
    borderWidth: 1,
    borderColor: '#3deb34',
    borderRadius: 5,
  },
});

export default App;
