import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export const Register_form_std= () => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data)

return(
    <form onSubmit={handleSubmit(onSubmit)} className="px-16 py-8 relative">
        <p className='font-bold text-lg text-center mb-5'>Registrate</p>

        <div>
            <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input class="bg-gray-50 borderpt-2  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div>
            <label for="apellido" class="block pt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div className="flex">  
            <div className="flex-grow-1 w-1/3 pr-8">
                <label for="cedula" class="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white">Cédula</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
            </div>

            <div className="flex-grow-1 w-2/3">
                <label for="ciudad" class="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad</label>
                <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
            </div>
        </div>
        <div>
            <label for="correo" class="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white">Correo Institucional</label>
            <input class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div>
            <label for="password" class="block mb-2 pt-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
            <input type="password"  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
        </div>
        <div className="mb-3 pt-8 flex-row justify-center items-center">
            <Link to='/std/login'><button type="submit" className="border-2 bg-willy shadow-inner text-white py-2 w-48 ml-44 rounded-material hover:bg-blue-600 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>Registrarme</button></Link>
            <p className="text-sm text-center mt-5 text-blue-500 font-semibold">¿Politécnico, ya tienes cuenta? <Link to="/std/login"><span className="hover:text-blue-700 hover:cursor-pointer"><u>Inicia Sesión</u></span></Link></p>
        </div>
    </form>
  )
}