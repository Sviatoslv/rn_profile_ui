import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '../constants';

export const ProfileImage = () => (
  <View style={styles.profileImage}>
    <View style={styles.imageContainer}>
      <Image source={require("../../assets/avatar.jpg")} style={styles.image} />
    </View>
    <View style={styles.chatContainer}>
      <Ionicons name="md-chatboxes" size={20} color="#fff" />
    </View>
    <View style={styles.active}/>
    <View style={styles.follow}>
      <Ionicons name="md-add" size={40} color="#fff" />
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    alignSelf: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  chatContainer: {
    backgroundColor: COLORS.BACKGROUND,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
  },
  active: {
    position: "absolute",
    width: 20,
    height: 20,
    bottom: 28,
    left: 12,
    backgroundColor: COLORS.ACTIVE,
    borderRadius: 10,
  },
  follow: {
    position: 'absolute',
    width: 70,
    height: 70,
    right: 0,
    bottom: 20,
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
