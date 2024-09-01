import {Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import Read from './pages/Read'
import Dash from './pages/Dash'
 
 function App(){
  return <Routes>
 <Route path="/" element={<Header/>}/>
<Route path="/" element={<Dash/>}/>
 <Route path="/form" element={<Form/>}/>
 <Route path="/dash" element={<Dash/>}/>
 
 <Route path="/read" element={<Read/>}/>
  </Routes>
  //// hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
 }
 export default App