 import { NavLink } from "react-router-dom"

function Dashboard(){

    return <div className=""> 
     <div className="w-[20%] bg-blue-700 fixed h-screen text-white text-2xl ">
<h1 className="text-4xl pl-3 border-b-4 pt-6">Dahborad</h1>
<ul className="space-6 pl-6 pt-20]">
  <NavLink to="/Dash">  <li className="pt-10"><i class="fa-brands fa-microsoft"></i> Dashboard</li></NavLink>
<NavLink to="/read"> <li className="pt-4"><i class="fa-solid fa-book"></i> Complaint</li></NavLink> 
    <li className="pt-4"><i class="fa-solid fa-gear"></i> Logout</li>
</ul>
    </div>

 
 
 </div>


 
}
export default Dashboard