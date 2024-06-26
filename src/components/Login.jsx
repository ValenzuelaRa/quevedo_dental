'use client'

// Importación de módulos y hooks necesarios
import { set, useForm } from "react-hook-form"; // Para el manejo de formularios
import { signIn } from "next-auth/react"; // Para la autenticación
import { useRouter } from 'next/navigation'; // Para la navegación
import { useState } from 'react'; // Para manejar el estado

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.Email,
      password: data.Password,
    });

    // console.log(res);

    // Manejo de errores o redirección en caso de éxito
    if (res.error) {
      setError(res.error);
    } else {
      router.push('/dashboard');
    }
  });

  return (
    <div className="mx-auto p-8 w-4/5 max-w-lg custom-shadow rounded-lg bg-secondary-dash2"
    >
      <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>
      <form onSubmit={onSubmit} className="space-y-8">
        {error && (
          <p className="bg-primary-red text-xs text-white p-3 rounded-md text-center"> {error}</p>
        )}
        <div className="flex flex-col">
          <label htmlFor="Email" className="text-lg font-medium">Correo:</label>
          <input
            type="email"
            {...register("Email", { required: "Correo electronico requerido" })}
            className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3 text-center"
            placeholder="Ingresa tu correo electrónico"
            style={{ fontWeight: "300" }}
          />
          {errors.Email && (
            <span className="text-red-500 text-xs mb-4">{errors.Email.message}</span>
          )}
        </div>
        <label htmlFor="Password" className="text-lg font-medium">Contraseña:</label>
        <input
          type="password"
          {...register("Password", { required: "Contraseña requerida" })}
          className="w-full outline-none rounded-md bg-gray-200 px-4 py-3 text-center"
          placeholder="Ingresa tu contraseña"
          style={{ fontWeight: "300" }}
        />
        {errors.Password && (
          <span className="text-red-500 text-xs">{errors.Password.message}</span>
        )}
        <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-gradient-to-r from-purple-700 to-blue-500" style={{ background: "linear-gradient(to right,  #2D16AD, #167CA5, #5AA7E6, #5EDCEC) " }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;