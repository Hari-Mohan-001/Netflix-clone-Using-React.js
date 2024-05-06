
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import MovieCards from './Components/MovieCards/MovieCards'
import { Orginals,Action,Comedy,Horrer,Romance,Trending,Documentaries } from "./Url";


function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <MovieCards title='Orginals' url={Orginals}/>
      <MovieCards title='Trending' url={Trending} isSmall/>
      <MovieCards title='Action' url={Action} isSmall/>
      <MovieCards title='Comedy Movies' url={Comedy} isSmall/>
      <MovieCards title='Horrer Movies' url={Horrer} isSmall/>
      <MovieCards title='Romance Movies' url={Romance} isSmall/>
      <MovieCards title='Documentaries' url={Documentaries} isSmall/>
    </>
  )
}

export default App
