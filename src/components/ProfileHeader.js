import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ProfileHeader = () => (
  <View style={styles.container}>
    <Ionicons name="ios-arrow-back" size={20} color="black" />
    <Ionicons name="md-more" size={20} color="black" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingTop: 30,
    paddingBottom: 5,
  },
});
