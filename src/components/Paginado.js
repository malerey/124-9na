const Paginado = ({ handleClickPrev, handleClickNext, page, totalPages, handleClickFirstPage, handleClickUltimaPagina }) => {
  
  return (
    <div>
      <button onClick={handleClickFirstPage} disabled={page === 1}>Pagina 1</button>
      <button
        onClick={handleClickPrev}
        disabled={page === 1}
      >Prev</button>
      pagina {page}
      <button
        onClick={handleClickNext}
        disabled={totalPages > 500 ? page === 500 : page == totalPages}
      >Next</button>

      <button 
       onClick={() => handleClickUltimaPagina(totalPages > 500 ? 500 : totalPages)}
       disabled={totalPages > 500 ? page === 500 : page == totalPages}
       >Ultima pagina</button>
    </div>
  )
}

export default Paginado
