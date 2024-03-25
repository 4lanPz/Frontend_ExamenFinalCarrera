import LogoSys from '../assets/icons/logo_EPN.png'
import Action_pc from '../assets/icons/student-landing.png'
import Wave_A from '../assets/images/wave.svg'
import Fondo from '../assets/images/fondo.png'
import {Link} from 'react-router-dom'
import 'transition-style';

const date = new Date();
const year = date.getFullYear();

export const Landing = () => {
    
    return (
        <>
            <main className='flex-col w-full h-full m-0' transition-style="in:circle:hesitate">
                <nav className='flex justify-between items-center px-12 py-8'>
                    <div className='flex justify-center items-center'>
                    <Link to='/home'><img src={LogoSys} width={45} /></Link>
                        <h1 className='font-bold text-lg xl:text-xl ml-10'>Sistema de Gestión de Matrículas | EPN</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                            <Link to="/std/login"><button className='bg-blue-400 px-6 py-5 font-semibold leading-loose text-xs text-white rounded-material shadow-inner hover:bg-blue-500'>Ingreso</button></Link>
                        </div>
                </nav>
                <section className='flex justify-center items-center px-10 py-10 z-50 relative'>
                    <aside className='flex w-3/6 h-full flex-col justify-left items-left text-justify pr-52 ml-2'>
                        <p className='text-2xl xl:text-3xl -mt-32 xl:-mt-38'>Bienvenido a el nuevo sistema de gestión de matrículas, con este podras: agilizar, organizar y gestionar las matriculas de manera eficiente, segura y rápida.</p>
                    </aside>
                    <aside className='flex w-1/3 h-full justify-center items-center relative z-10'>
                        <img src={Action_pc} width={500} className='xl:-mt-10' />
                    </aside>
                </section>
                
                
            </main>
            <footer className='flex items-end justify-end px 12 py-2 bg-willy w-full h-auto absolute bottom-0 z-20'>
                <p className='text-s text-white py-5 px-14'>©{year} Juan Falconi - Alan Pérez</p>
            </footer>
        </>
    )
}

export default Landing