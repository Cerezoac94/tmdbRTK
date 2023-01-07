// orderMoviesRelase.utility.jsx
export const orderMoviesRelase = (a,b) => {
    let aD = new Date(a.release_date)
    let bD= new Date(b.release_date);
    return bD - aD
    }