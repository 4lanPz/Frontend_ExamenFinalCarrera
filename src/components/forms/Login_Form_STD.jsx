import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export const Login_Form_STD = () => {
    // `${import.meta.env.VITE_BACKEND_URL}/paciente/login`
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()


const onSubmit = (data) => console.log(data)



return (
    <form className="flex-col px-24 w-auto" onSubmit={handleSubmit(onSubmit)}>
        <p className='font-bold text-lg text-center mb-5'>Iniciar Sesión</p>
            <div className="mt-3">
                <label className="block text-base mb-2">Correo Institucional</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 active:shadow-inner rounded-md" />
            </div>
            <div className="mt-3">
                <label className="block text-base mb-2">Contraseña</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 active:shadow-inner rounded-md"/>
            </div>
            <div className="mt-5">
                <Link to='/std/profile'><button type="submit" className="border-2 bg-willy shadow-inner text-white py-1 w-full rounded-md hover:bg-blue-600 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>Ingresar</button></Link>
            </div>
            <div className="mt-6">
                <p className="text-sm text-center text-blue-500 font-semibold">¿Aún no tienes cuenta?   <Link to="/std/register"><span className="hover:text-blue-700 hover:cursor-pointer"><u>Regístrate</u></span></Link></p>
            </div>
    </form>
)
}
