import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const TopNavBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  searchBar: {
    padding: "2.5%",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginHorizontal: "5%",
    marginVertical: "15%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 150,
  },
  searchInput: {
    fontSize: 16,
  },
});

export default TopNavBar;
