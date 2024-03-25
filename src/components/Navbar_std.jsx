import userICon from '../assets/icons/user-circle-svgrepo-com.svg'
import {Link} from 'react-router-dom'
import logout_Logo from '../assets/icons/logout-svgrepo-com.svg'
import dashboardIcon from '../assets/icons/dashboard-4-svgrepo-com.svg'
import listIcon from '../assets/icons/list-receipt-svgrepo-com.svg'
import addIcon from '../assets/icons/document-1-svgrepo-com.svg'
import ListarMaterias from "../views/ListarMaterias"
import 'animate.css';

export const Navbar_std = () =>{
    
    return(
        <aside className="animate__animated animate__fadeInLeft animate__delay-0.8s absolute top-0 flex-col justify-center items-center w-48 h-full px-22 py-8 bg-blue-300 z-0"> 
            <div className='flex-col justify-center items-center font-medium -mt-3 pt-20'>
                <img src={userICon} width={40} className='w-full p-8 -mb-8'/>
                <p className='text-md text-center'>Bienvenido, usuario</p>
                <p className='text-xs text-center'>Cargo: Estudiante</p>
            </div>

            <div className='w-auto h-auto text-xs font-medium mt-5 mb-2'>
                <ul className='flex-col justify-between items-left ml-5 mt-8 mb-10'>  
                    <li className='flex justify-left items-center w-48 pl-5 pr-5 pr-3 pb-4 -ml-5 pt-4 cursor-pointer hover:bg-blue-400 hover:shadow-deep'><img src={dashboardIcon} width={30}/>&nbsp;&nbsp;<span>Listar Materias</span></li>
                    <li className='flex justify-left items-center w-48 pl-5 pr-5 pr-3 pb-4 -ml-5 pt-4 cursor-pointer hover:bg-blue-400 hover:shadow-deep'><img src={addIcon} width={25}/>&nbsp;&nbsp;<span>Registrar Materias</span></li>
                </ul>
            </div>

            <div className='absolute bottom-8 left-10'>
                <Link to="/home">
                    <button className='bg-willy px-7 py-3 flex justify-between shadow-inner items-center rounded-material font-medium text-white text-xs hover:bg-blue-500 '><span><img src={logout_Logo} width={15}/></span>&nbsp;&nbsp;Salir</button>
                </Link>
            </div>
        </aside>
    )
}