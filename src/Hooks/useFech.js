// Importamos los hooks necesarios de React
import { useCallback, useEffect, useState } from "react";

// Definimos nuestro hook personalizado
export const useFetch = (url) => {
  // Creamos tres estados: data, loading y error
  const [data, setData] = useState(null); // Al principio, data es null
  const [loading, setLoading] = useState(true); // Al principio, loading es true
  const [error, setError] = useState(null); // Al principio, error es null

  // Definimos la función getData usando useCallback para que sólo se vuelva a crear cuando la url cambia
  const getData = useCallback(async () => {
    setLoading(true)
    try {
      // Intentamos obtener los datos de la url proporcionada
      const response = await fetch(url);
      // Si la respuesta no es exitosa, lanzamos un error
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      // Si la respuesta es exitosa, convertimos la respuesta a JSON y guardamos los datos en el estado data
      const data = await response.json();
      setData(data);
    } catch (error) {
      // Si ocurre un error durante la búsqueda, guardamos el mensaje de error en el estado error
      setError(error.message);
    } finally {
      // Al final, independientemente de si la búsqueda fue exitosa o no, establecemos el estado loading en false
      setLoading(false);
    }
  }, [url]); // getData se vuelve a crear sólo cuando la url cambia

  // Usamos useEffect para llamar a getData cada vez que esta cambia
  useEffect(() => {
    getData();
  }, [getData]);

  // Finalmente, devolvemos un objeto con los estados data, loading y error
  return { data, loading, error };
};
