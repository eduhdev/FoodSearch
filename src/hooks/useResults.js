import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const searchApi = async searchTerm => {
    try {
      setLoading(true);
      const { data: response } = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.businesses);
    } catch (error) {
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [loading, searchApi, results, errorMessage];
};
