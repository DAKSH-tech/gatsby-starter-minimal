import { useState ,useEffect} from "react";

const useDaksh = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Cleanup function to cancel the fetch request when the component unmounts
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        if (!isMounted) {
          // If the component has unmounted, do not update state
          return;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        if (!isMounted) {
          // If the component has unmounted, do not update state
          return;
        }
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the fetch request when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [id]);

  return { data, loading, error };
};

export default useDaksh;
