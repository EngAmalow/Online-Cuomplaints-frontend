import { useState } from "react"
import axios from "axios"
import  {toast, Toaster} from 'react-hot-toast'
import { useNavigate } from "react-router-dom"


    function Form(){
   
    const [titale, setTitale] = useState()
    const [comment, setComment] = useState()
    const [ID, setID] = useState()
     
    const navigate = useNavigate()

    const handleSubmit = (e) =>{

        e.preventDefault()

        // API Ka igu dar meshan 
axios.post("http://localhost:1000/Create",{
    "ID": ID,
    "titale": titale,
    "comment": comment,
}).then(()=>{
    toast.success("Result has been created!") 
   navigate("/")
}).catch((error)=>{
     console.log(error);
     toast.error("Failed to save result ")
});
 }

 
    
    return  <div className=" h-[400px] text-white w-[320px] bg-slate-600 rounded ml-[360px]  ">
        <form> 
            <h1 className="pt-5 pl-8 text-black font-semibold">Send Us Your Complaints Please</h1>
            <input value={titale} onChange={(Event)=> setTitale(Event.target.value)} className="ml-8 mt-3 rounded text-black w-[260px] border-black border-[2px] " type="text"  placeholder="Entar Your Titale"/> <br />   
            <textarea value={comment} onChange={(Event)=>setComment(Event.target.value)} className="ml-8 mt-3 rounded   text-black w-[260px] border-black border-[2px]" placeholder="Enter Your Complaints"> </textarea>
          


          <button  onClick='/' className="bg-red-600 rounded text-white border-red-600 border-[3px] ml-8 mt-3 px-2 ">Close</button>
          <button onClick={handleSubmit} className="bg-green-600 rounded text-white border-green-600 border-[3px]   ml-1 mt-3 px-2 ">Send</button>
          </form>
          <Toaster/>
        </div>

 
    
}
export default Form