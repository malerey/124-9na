import useFetchPeliculas from "../hooks/useFetchPeliculas"
import usePaginado from "../hooks/usePaginado"
import Paginado from "./Paginado";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const UltimosLanzamientos = () => {
  // const { page, handleClickNext, handleClickPrev, handleClickFirstPage, handleClickUltimaPagina } = usePaginado()

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const { peliculas, isLoading, totalPages }  = useFetchPeliculas("upcoming", "movie", page)
  

  return (
    <div>
      <h2>Ultimos lanzamientos PELICULAS</h2>
      {isLoading && <p>ESTA CARGANDO</p>}
      {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
      ))}


  <Pagination 
    count={totalPages > 500 ? 500 : totalPages} 
    page={page} 
    onChange={handleChange} 

    />

      {/* <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        handleClickFirstPage={handleClickFirstPage}
        handleClickUltimaPagina={handleClickUltimaPagina}
        page={page}
        totalPages={totalPages}

    /> */}

    </div>
  );
};

export default UltimosLanzamientos;
