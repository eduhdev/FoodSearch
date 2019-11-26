import React, { useState } from "react";
import { View, Text } from "react-native";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar term={term} onTermChange={newTerm => setTerm(newTerm)} />
    </View>
  );
};

export default SearchScreen;
