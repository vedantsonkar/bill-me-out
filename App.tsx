import React, { createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BottomNavbar from "./components/BottomNavBar";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [activeTab, setActiveTab] = React.useState("Home");
  const UserContext = createContext({
    activeScreen: activeTab,
    setActiveScreen: setActiveTab,
  });
  return (
    <UserContext.Provider
      value={{ activeScreen: activeTab, setActiveScreen: setActiveTab }}
    >
      <View style={styles.container}>
        {/* <View style={styles.topNavbar}>
        <TopNavBar />
      </View> */}
        <View style={styles.screen}>
          <View>{activeTab === "Home" && <HomeScreen />}</View>
        </View>
        <View style={styles.bottomNavbar}>
          <BottomNavbar activeTab={activeTab} onChangeTab={setActiveTab} />
        </View>
        <StatusBar style="auto" backgroundColor="white" translucent={true} />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  topNavbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
