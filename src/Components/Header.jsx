 import { NavLink } from "react-router-dom"
 
function Header (){
    return <div className=""> 
       <div  className="bg-GadalColor text-OneColor ">

    <div className="flex justify-between py-5 items-center px-20">
    <h1 className="font-bold">SomaliTech</h1>
    <ul className="text-CadanColor flex gap-10 text-sm ml-10  ">
        <li>Home</li>
        <li>About</li>
        <li>Eduction</li>
        <li>Skills</li>
        <li>Contact</li>
        {/* <li>Projects</li> */}
    </ul>
    <div className="">
        <button className="bg-TwoColor  mr-3 px-3 rounded text-1xl border-[3px]  text-white ">Log In</button>
   <NavLink to="/Dash"> <button className="bg-GadalColor  px-3 rounded text-1xl border-[3px] border-TwoColor">Admin</button> </NavLink> 
    </div>
    </div>
     </div>
    {/* // MAinka  */}
    
    <div>
        <h1 className="text-GadalColor text-5xl text-center pt-20 font-bold">Make Your Complaints Way Easier Ever</h1>
    <p className="text-center pt-3 font-semibold">We Are Committed To Solve Your Complaints You Could Have.</p>
 
  <NavLink to="/form"><button className="bg-GadalColor text-4xl text-white px-4 py-1  ml-[360px] mt-4 rounded-xl">Make Complaint</button></NavLink>  
    
    </div>



        </div>
}
export default Header