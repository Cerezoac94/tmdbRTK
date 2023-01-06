// En este componente llamaremos a los componentes que pertenecen a la vista de populares
// Posteriormente este componente sera llamado en la page popular o a la que pertenezca


import PopularList from "./components/PopularList"

export const PopularView = () => {
  return (
    <>
    <PopularList/>
    <div>AsideList</div>
    </>
  )
}
