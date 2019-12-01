import React from "react";

import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  loading: {
    fontSize: 40
  }
});

export default Loading;
