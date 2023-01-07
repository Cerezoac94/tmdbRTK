export const ifImage = (m) => {
  return m.backdrop_path && m.poster_path;
}
export const ifPoster = (m) => {
  return m.poster_path;
}