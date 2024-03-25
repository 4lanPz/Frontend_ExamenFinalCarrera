import { Link } from 'react-router-dom';
import LogoSys from '../assets/icons/logo_EPN.png'
import Wave_B from '../assets/images/wave_2.svg' 
import { Register_form_std } from '../components/forms/Register_form_std';
import schoolSGV from '../assets/icons/student.png'

const Register_std = () => {

    return (
        <main className='absolute flex-col w-full h-full m-0 z-50' transition-style="in:circle:hesitate">
            <img src={Wave_B} className='absolute bottom-0 z-0' />
            <nav className='flex justify-between items-center px-12 py-8'>
                <div className='flex justify-center items-center'>
                <Link to='/home'><img src={LogoSys} width={45} /></Link>
                    <h1 className='font-bold text-lg xl:text-xl ml-10'>Sistema de Gestión de Matrículas | EPN</h1>
                </div>
            </nav>

            <aside className='w-1/2 absolute top-48 left-32 items-center justify-center'>
                <p className='flex w-2/3 pl-10 pr-20 pb-16 font-medium text-lg text-justify'>Registrate en la plataforma que le dará un giro a la educación politénica! Solo usa tu correo institucional y tus datos personales.</p>
                
                <img src={schoolSGV} width={200}  />
                
            </aside>

            <aside className='animate__animated animate__fadeInRight animate__delay-1s bg-white w-1/2 h-full absolute top-0 right-0 shadow-balto'>
                <Register_form_std/>
            </aside>
        </main>
    )
};

export default Register_std