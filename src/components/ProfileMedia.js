import React from "react";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { MEDIA_DATA } from "../MEDIA_DATA";
import { COLORS } from "../constants";

export const ProfileMedia = () => (
  <View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {MEDIA_DATA.map(({ uri, id }) => (
          <TouchableOpacity activeOpacity={0.6} key={id}>
            <Image style={styles.image} source={{ uri }} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>

    <View style={styles.tag}>
        <Text style={styles.quantity}>{MEDIA_DATA.length}</Text>
        <Text style={styles.text}>media</Text>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 16,
    paddingBottom: 10,
  },
  image: {
    marginRight: 16,
    height: 160,
    width: 140,
    borderRadius: 20,
  },
  tag: {
    position: "absolute",
    width: 70,
    height: 70,
    left: 40,
    top: 55,
    borderRadius: 10,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: "center",
    alignItems: "center",
  },
  quantity: {
    color: "#fff",
    fontSize: 20,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 10,
  },
});
