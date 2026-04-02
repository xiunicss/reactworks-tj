import './App.css'
import AxiosGet from './axios/AxiosGet'
import AxiosGetById from './axios/AxiosGetById'
import AxiosPost from './axios/AxiosPost'
import FetchExample from './components/FetchExample'
import FetchExample2 from './components/FetchExample2'
import FetchGet from './components/FetchGet'
import FetchGetById from './components/FetchGetById'
import Todos from './todos/Todos'

function App() {

  return (
    <>
      <section className="center">
        {/* <h2>비동기처리</h2> */}
        {/* /FetchExample /> */}
        {/* <FetchExample2 id={3} /> */}
        {/* <Todos />/ */}
        {/* <AxiosGet /> */}
        {/* <AxiosGetById id={2} /> */}
        {/* <AxiosPost /> */}

        <FetchGet />
        {/* <FetchGetById id={3} /> */}



      </section>
    </>
  )
}

export default App
