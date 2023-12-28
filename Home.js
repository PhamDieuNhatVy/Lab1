import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ex1 from "./project1";
import Ex2 from "./project2";
import Project3 from "./project3";
import Project4 from "./project4";
import Project5 from "./project5";
import Project6 from "./project6";
import Project7 from "./project7";
import Project8 from "./project8";

const projects = [
  { id: "project1", name: "Project 1", component: Ex1 },
  { id: "project2", name: "Project 2", component: Ex2 },
  { id: "project3", name: "Project 3", component: Project3 },
  { id: "project4", name: "Project 4", component: Project4 },
  { id: "project5", name: "Project 5", component: Project5 },
  { id: "project6", name: "Project 6", component: Project6 },
  { id: "project7", name: "Project 7", component: Project7 },
  { id: "project8", name: "Project 8", component: Project8 },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.projectButton}
      onPress={() => navigation.navigate(item.id)}
    >
      <Text style={styles.projectButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db", 
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  projectButton: {
    backgroundColor: "#008000", 
    width: "48%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    borderRadius: 10,
  },
  projectButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {projects.map((project) => (
          <Stack.Screen
            key={project.id}
            name={project.id}
            component={project.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
