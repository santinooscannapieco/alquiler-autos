import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" },
  } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const config = {
          method,
          headers,
          body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url, config);

        if (!response.ok) {
          throw new Error(
            `Error al realizar la solicitud: ${response.statusText}`
          );
        }

        if (response.status !== 204) {
          const result = await response.json();
          if (
            result.length !== data.length ||
            result.some((item, index) => item.id !== data[index]?.id)
          ) {
            setData(result);
          }
          //setData(result);
        } else {
          setData([]); // Para respuestas de tipo 204 No Content
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Dependencias adicionales para que se ejecute cada vez que cambien

  return { data, loading, error };
};

export default useFetch;
