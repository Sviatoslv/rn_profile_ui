import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { STATS_DATA } from "../STATS_DATA";
import { StatBox } from "./StatBox";

export const ProfileStatistics = () => (
  <View style={styles.container}>
    {STATS_DATA.map((statsBox, index) => (
      <StatBox
        count={statsBox.count}
        decription={statsBox.description}
        key={statsBox.id}
        last={index === STATS_DATA.length - 1}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
