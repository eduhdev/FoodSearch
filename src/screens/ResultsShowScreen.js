import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    const getResult = async () => {
      const { data: response } = await yelp.get(`/${id}`);
      setResult(response);
    };
    getResult();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
