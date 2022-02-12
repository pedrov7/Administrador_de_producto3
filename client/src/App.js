
import { Forms } from './components/Forms';
import { ShowProducts } from './components/ShowProducts';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from './components/Detail';


function App() {

  

  return (

      <BrowserRouter>
      
      <div className="d-flex justify-content-center">


         
          <Routes>

            <Route path="/" element={ <Forms/>}/>  
            <Route path="/api/allproducts" element={ <ShowProducts/>}/>           
            {/* <Route path="/api/product/:id" element={ <Detail/>}/>  */}
            <Route path="/:id" element={ <Detail/>}/> 
           

          </Routes>

        </div>

      </BrowserRouter>



  );
}

export default App;
