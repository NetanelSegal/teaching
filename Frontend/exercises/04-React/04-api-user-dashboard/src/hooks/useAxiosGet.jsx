import { useEffect, useState } from "react";
import { axiosGet } from "../services/axiosService";

/**
 * A hook that wraps around the axiosGet function to fetch data from a url
 *
 * @param {string} url - The url to fetch data from
 * @param {*} initialData - The initial data to return while fetching
 * @returns {{data: *, error: *, loading: boolean}} - An object with data, error and loading states
 */

export default function useAxiosGet(url, initialData = null) {
  // The state for the data, error and loading
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // A function to fetch the data
  const fetchData = async () => {
    // Set loading to true
    setLoading(true);

    try {
      // Fetch the data
      const data = await axiosGet(url);
      // Set the data and error
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData(data);
      setError("");
    } catch (error) {
      // Set the error
      setError(error);
    } finally {
      // Set loading to false
      setLoading(false);
    }
  };

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Return the state
  return { data, error, loading };
}
