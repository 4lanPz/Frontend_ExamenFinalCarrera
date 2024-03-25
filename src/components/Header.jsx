import logo from '../assets/icons/logo_EPN.png'
import datetimeLogo from '../assets/icons/i-schedule-school-date-time-svgrepo-com.svg' 

export const Header = () =>{

    const date = new Date();
    const present_date = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    const present_time = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');

    return (
        <header className='animate__animated animate__fadeInDown absolute z-50 flex w-full h-auto justify-between items-center px-8 py-4 bg-blue-200'>
            <div className='flex justify-center items-center'>
                <img src={logo} width={30} />
                <h1 className='font-bold text-lg xl:text-xl ml-10'>Sistema de Gestión de Matrículas | EPN</h1>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='flex justify-around items-center'>
                    <li><img src={datetimeLogo} width={45}/></li>
                    <li>{present_date}&nbsp;</li>
                    <li>&nbsp;{present_time}</li>
                </ul>
            </div>
        </header>
    )
}
