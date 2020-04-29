import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../constants";

export const StatBox = ({ count, decription, last }) => (
  <View
    style={{
      ...styles.statsBox,
      borderRightColor: last ? null : COLORS.BORDERS,
      borderRightWidth: last ? null : 1,
    }}
  >
    <Text style={styles.count}>{count}</Text>
    <Text style={styles.description}>{decription}</Text>
  </View>
);

const styles = StyleSheet.create({
  statsBox: {
    alignItems: "center",
    paddingHorizontal: 10,
    width: "33%",
  },
  count: {
    fontSize: 24,
    color: COLORS.MAIN_TEXT,
  },
  description: {
    fontSize: 12,
    color: COLORS.SECONDARY_TEXT,
  },
});
