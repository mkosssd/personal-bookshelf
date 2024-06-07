import './App.css';
import Root from './components/Root';
import Home from './pages/home';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Search from './pages/search';
import Shelf from './pages/shelf';


function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Root/>,children:[
      {path:'/',element:<Home/>},
      {path:'/search',element:<Search/>,children:[
        {path:'?query=:query'}
      ]},
      {path:'/shelf',element:<Shelf/>}
    ]}
  ])
  return <RouterProvider router ={router}/>
}

export default App;
