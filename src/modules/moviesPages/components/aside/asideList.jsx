import MoviesAside from "./MoviesAside";
import { useGetLatestMoviesQuery } from "../../../../redux/api/tmdbAPI";
import { dates } from "../../../../utilities/formatDateYYYYMMDD.utility";
import { ifPoster } from "../../../../utilities/validateContains.utility";

const AsideList = () => {
  const date = dates();
  const { data: result = [], isLoading } = useGetLatestMoviesQuery({
    page: "1",
    startDate: date.startDate,
    endDate: date.endDate,
  });

  return isLoading ? (
    <h3>Cargando...</h3>
  ) : (
    result?.results
      ?.filter(ifPoster)
      .slice(0, 4)
      .map((movie) => <MoviesAside movie={movie} key={movie.id} />)
  );
};

export default AsideList;
