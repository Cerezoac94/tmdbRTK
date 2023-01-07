import { useGetLatestMoviesQuery } from "../../redux/api/tmdbAPI"
import MoviesAside from './MoviesAside'



const AsideList = () => {
  
// formatDateYYYY-MM-DD.utility
  // formateo de fecha => yyyy-mm-dd
  function formatDate(date) {
    // El método toISOString convierte una fecha a string, pero también, el mes (Jan, Feb, Mar...) lo transforma a número:
    // Input Jan 06 2023  => Output: "2023-01-06".
    return date.toISOString().split('T')[0];
  }
  
  // fecha actual
  let date = new Date();
  const endDate = formatDate(date)
  
  
  // fecha inicial
  const dateBefore = new Date();
  dateBefore.setDate(date.getDate() - 6);
  const startDate = formatDate(dateBefore)
  console.log("fecha inicial, restada", startDate);

// ##########################################

  // validation.utility,jsx
  // export imageValidate
  const ifImage = (m) => {
    return m.backdrop_path && m.poster_path;
  }


// ##########################################

  // orderMoviesRelase.utility.jsx
  const order = (a,b) => {
    let aD = new Date(a.release_date)
    let bD= new Date(b.release_date);
    return bD - aD
    }

  const {data:result=[], isLoading} = useGetLatestMoviesQuery({page:"1" ,startDate, endDate});
 
  return isLoading ? <h3>Cargando...</h3> : result?.results?.filter(ifImage).sort(order).slice(0,4).map(movie => <MoviesAside movie={movie} key={movie.id}/>)
}



export default AsideList