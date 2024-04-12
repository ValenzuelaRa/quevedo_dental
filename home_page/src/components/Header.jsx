import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center min-w-full justify-end m-2">
      <div>
        <Link href="/">
          <h1 className="text-3xl font-bold text-gray-800">QUEVEDODENTAL</h1>
        </Link>

      </div>
      <div className='text-9x1 mx-3'>|</div>
      <nav className="hidden md:flex ">
        <ul className="flex items-center p-5">
          <li className='p-2'>
            <Link href="/">Inicio</Link>
          </li>
          <li className='p-2'>
            <Link href="/pages/servicios">Servicios</Link>
          </li>
          <li className='p-2'>
            <Link href="/pages/sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li className='p-2'>
            <Link href="/pages/nuestro-equipo">Nuestro Equipo</Link>
          </li>
          <li className='p-2'>
            <Link href="/pages/contactanos">Contactanos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
