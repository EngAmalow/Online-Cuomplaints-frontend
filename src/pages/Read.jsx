import { useEffect, useState } from "react"
import Dashboard from "./Dashboard"
import axios from 'axios'
function Read(){

const [readResult, setReadResult] = useState([])


// Api Soo Bandhigayo Xogteeyna 
const handleGetData = ()=>{
axios.get("http://localhost:1000/Read").then((respone)=>{
    setReadResult(respone.data)

}).catch((error)=>{
    console.log(error)
})
}
// Xogtan Inte la gu so ban dhigaya horta
useEffect(()=>{
    handleGetData()
})



    
     return <div className="">
        <Dashboard/>
 
<h1 className="bg-blue-700 py-3   ml-[18%] text-center text-white font-mono text-4xl">Reading Results</h1>
     <table className="ml-[20%] gap-y-20   justify-start  ">
    <tr className="   border-black  ">
    <th className="font-mono px-10   ">ID</th>
    <th className="font-mono  px-10  ">Titale</th>
    <th className="font-mono px-10  ">Comment</th>
    <th className="font-mono px-16  ">IssueDate</th>
    <th className="font-mono px-16  ">Action</th>
       </tr>
{
    readResult.map((data)=> {
    return    <tr className="ml-[25%] ">
        <th className="font-sans text-[19px] text-center border-b-[4px]  ">{data.id}</th>
        <th className="text-[15px] border-b-[4px]  px-4  text-start  ">{data.titale}</th>
        <th className="text-[15px] border-b-[4px]   px-2 text-start  ">{data.comment}</th>
        <th className="text-[10px] border-b-[4px]      text-center ">{data.date}</th>
        <th className="font-sans text-[15px] border-b-[4px]  text-center "><button className="bg-blue-600 text-white rounded px-2">Details</button> </th>
         
           </tr>
    })
}
 
        </table>
</div>
    
}
export default Read