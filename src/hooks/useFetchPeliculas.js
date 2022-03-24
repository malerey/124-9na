import { useState, useEffect } from 'react';

// esto es un custom hook
// un custom hook es una funcion reutilizable que permite usar un estado
// lo manejamos igual que a otra funcion de javascript

import {
  urlBase,
  apiKey,
  queryParamLenguaje,
  definirURL,
} from '../utils/variables';

const useFetchPeliculas = (categoria, tipo, page, search) => {
  const [peliculas, setPeliculas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1)

  const url = `${urlBase}${definirURL(categoria, tipo, search)}?${apiKey}${queryParamLenguaje}es&page=${page}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // esto no sirve para los detalles de la pagina
        setPeliculas(data.results);
        setTotalPages(data.total_pages)
        setIsLoading(false);
      });
  }, [page]);

  // return [peliculas, isLoading]
  return {
    peliculas: peliculas,
    isLoading: isLoading,
    totalPages: totalPages
  };
};

export default useFetchPeliculas;
