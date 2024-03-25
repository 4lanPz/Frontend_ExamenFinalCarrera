import LogoSys from '../assets/icons/logo_EPN.png'
import Wave_B from '../assets/images/fondo.png' 
import { Link } from "react-router-dom"
import onlineSTD from '../assets/images/undraw_online_test_re_kyfx.svg'
import {Login_Form_STD} from '../components/forms/Login_Form_STD'
const date = new Date();
const year = date.getFullYear();

const Login = () =>{
    return(
        <>
            <main className='flex-col w-full h-full m-0' >
                <nav className='flex justify-between items-center px-12 py-8'>
                    <div className='flex justify-center items-center'>
                    <Link to='/home'><img src={LogoSys} width={45} /></Link>
                        <h1 className='font-bold text-lg xl:text-xl ml-10'>Sistema de Gestión de Matrículas | EPN</h1>
                    </div>
                </nav>

                <aside className='flex w-1/4 absolute flex-col justify-center items-center w-1/2 h-auto top-30 mt-20 left-52 z-30'>
                    <div> 
                        <p className=' text-lg text-justify justifyContent py-4'>Estimado estudiante, para acceder a tu cuenta de matriculación debes registarte o iniciar sesión con tu correo institucional.</p>
                    </div>
                    <div className='flex w-full justify-center items-center mt-4'>
                        <img src={onlineSTD} width={350}/>
                    </div>
                </aside>

                <aside className='animate__animated animate__fadeInRight absolute right-52 top-56 z-50 shadow-lg bg-slate-50 flex flex-col w-auto h-auto rounded-material py-8'>                  
                    <Login_Form_STD/>
                </aside>

            </main>
            
            <footer className='flex items-end justify-end px 12 py-2 bg-willy w-full h-auto absolute bottom-0 z-20'>
                <p className='text-s text-white py-5 px-14'>©{year} Juan Falconi - Alan Pérez</p>
            </footer>
        </>
    )
}

export default Login    