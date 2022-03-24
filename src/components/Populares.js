import { useState } from "react";
import useFetchPeliculas from "../hooks/useFetchPeliculas"
import Paginado from "./Paginado";
import usePaginado from "../hooks/usePaginado"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Populares = () => {
  // const { page, handleClickNext, handleClickPrev, handleClickFirstPage, handleClickUltimaPagina } = usePaginado()
  

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


  const { peliculas, isLoading, totalPages } = useFetchPeliculas("popular", "tv", page)



  return (
    <div>
      <h2>Series Populares</h2>
      {isLoading && <p>ESTA CARGANDO</p>}
      {peliculas.map(serie => (
        <div key={serie.id}>
          <h2>{serie.name}</h2>
        </div>
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
  )
}

export default Populares
