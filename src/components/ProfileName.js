import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from '../constants';

export const ProfileName = () => (
  <View style={styles.container}>
    <Text style={styles.name}>
      Julie
    </Text>
    <Text style={styles.post}>
      Photograper
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 34,
    color: COLORS.MAIN_TEXT,
  },
  post: {
    fontSize: 12,
    color: COLORS.SECONDARY_TEXT,
  }
});
