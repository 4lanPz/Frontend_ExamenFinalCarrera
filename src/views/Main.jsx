import schoolSGV from '../assets/images/undraw_education_f8ru.svg'
import Wave_B from '../assets/images/wave_2.svg'
import LogoSys from '../assets/icons/logo.png'
import {Link} from "react-router-dom"

const Main = () => {
    return(
        <>
        <img src={Wave_B} width={2000} className='absolute flex justify-center items-center left-0 bottom-0'/>
        <img src={schoolSGV} width={500} className='absolute flex justify-center items-center left-0 bottom-0'/>
        <div className='flex justify-center items-center mt-16'>
            <img src={LogoSys} width={45} />
                <h1 className='font-bold text-lg xl:text-xl ml-10'>Sistema de Gestión de Matrículas | EPN</h1>
            </div>
        <main className='absolute top-64 left-1/3 ml-40 flex justify-center items-center'>
            <Link to="/home">
                <button className='bg-blue-400 px-9 py-5 font-semibold leading-loose text-md text-white rounded-material shadow-inner hover:bg-blue-500'>Ingreso al sitio</button>
            </Link>
        </main>
        </>
    )
}
export default Main