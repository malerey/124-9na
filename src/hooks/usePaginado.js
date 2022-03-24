import { useState } from "react";

const usePaginado = () => {
  const [page, setPage] = useState(1)

  const handleClickFirstPage = () => {
    setPage(1)
  }

  const handleClickPrev = () => {
    setPage(page - 1)
  }

  const handleClickNext = () => {
    setPage(page + 1)
  }

  const handleClickUltimaPagina = (totalPages) => {
    setPage(totalPages)
  }

  return ({
    page: page, 
    handleClickPrev: handleClickPrev, 
    handleClickNext: handleClickNext, 
    handleClickFirstPage: handleClickFirstPage, 
    handleClickUltimaPagina: handleClickUltimaPagina
  })

}

export default usePaginado
