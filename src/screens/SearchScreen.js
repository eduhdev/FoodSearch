import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import useResults from "../hooks/useResults";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import Loading from "../components/Loading";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [loading, searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => result.price === price);
  };

  if (loading) return <Loading />;

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
