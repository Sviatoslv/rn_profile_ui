import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants";
import { ActivityItem } from './ActivityItem';
import { ACTIVITY_DATA } from '../ACTIVITY_DATA';

export const ProfileActivity = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Recent Activity</Text>

    {ACTIVITY_DATA.map(({ id, simpleText, linkedText }) => (
      <ActivityItem
        key={id}
        simpleText={simpleText}
        linkedText={linkedText}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: COLORS.SECONDARY_TEXT,
    fontSize: 10,
    textTransform: "uppercase",
  },
});
