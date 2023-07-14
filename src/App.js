import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import background from './images/images/Rectangle1.png'
function App() {
  return (
    <div style={{
      backgroundImage: `url(${background})`,
    
    }} className="App text-white bg-cover bg-no-repeat ">

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
