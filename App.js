import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import { ProfileHeader } from "./src/components/ProfileHeader";
import { ProfileImage } from './src/components/ProfileImage';
import { ProfileName } from './src/components/ProfileName';
import { ProfileStatistics } from './src/components/ProfileStatistics';
import { ProfileMedia } from "./src/components/ProfileMedia";
import { ProfileActivity } from './src/components/ProfileActivity';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <ScrollView>
        <ProfileImage/>
        <ProfileName/>
        <ProfileStatistics/>
        <ProfileMedia/>
        <ProfileActivity/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
