import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

interface Props {
  activeTab: string;
  onChangeTab: (tabName: string) => void;
}

const BottomNavbar: React.FC<Props> = ({ activeTab, onChangeTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => onChangeTab("Home")}>
        <Image
          source={require("../assets/home.png")}
          style={[styles.icon, activeTab === "Home" && styles.activeIcon]}
        />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onChangeTab("Offers")}
      >
        <Image
          source={require("../assets/offers.png")}
          style={[styles.icon, activeTab === "Offers" && styles.activeIcon]}
        />
        <Text style={styles.text}>Offers</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => onChangeTab("Scan")}>
        <Image
          source={require("../assets/qr.png")}
          style={[styles.icon, activeTab === "Scan" && styles.activeIcon]}
        />
        <Text style={styles.text}>Scan Bacode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => onChangeTab("Account")}
      >
        <Image
          source={require("../assets/account.png")}
          style={[styles.icon, activeTab === "Account" && styles.activeIcon]}
        />
        <Text style={styles.text}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#808080",
  },
  activeIcon: {
    tintColor: "rgba(173, 216, 230, 1)",
  },
  text: {
    color: "#808080",
  },
});

export default BottomNavbar;
