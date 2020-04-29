import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants";

export const ActivityItem = ({ simpleText, linkedText }) => (
  <View style={styles.activityItem}>
    <View style={styles.activityIndicator} />
    <View style={styles.textContainer}>
      {simpleText.map((item, index) => (
        <Text key={index}>
          <Text style={styles.text}>{item} </Text>
          <Text style={styles.linkedText}>{linkedText[index]}</Text>
        </Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
  activityIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.SECONDARY_ACCENT,
    marginLeft: 12,
    marginRight: 20,
    marginTop: 5,
  },
  textContainer: {
    paddingRight: 20,
  },
  text: {
    fontSize: 14,
    color: COLORS.SECONDARY_TEXT,
  },
  linkedText: {
    color: COLORS.MAIN_TEXT,
  },
});
