import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [window.location.search]);

  return (
    <header className='bg-gradient-to-r from-gray-800 to-black text-white py-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-center items-center'>
        <Link to='/' className='text-4xl font-extrabold text-center mb-4 md:mb-0 md:mr-6'>
          VKT<span className='text-blue-500'>Estate</span>
        </Link>
        <form onSubmit={handleSubmit} className='flex items-center mx-auto mb-4 md:mb-0'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-gray-700 text-white focus:outline-none border-none px-4 py-2 rounded-l-full'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-blue-500 text-white px-6 py-2 rounded-r-full'>
            <FaSearch />
          </button>
        </form>
        <nav className='hidden md:flex gap-8'>
          <Link to='/' className='text-white hover:text-blue-500 transition duration-300'>
            Home
          </Link>
          <Link to='/about' className='text-white hover:text-blue-500 transition duration-300'>
            About
          </Link>
          {/* NEW: Services Link */}
          <Link to='/services' className='text-white hover:text-blue-500 transition duration-300'>
            Services
          </Link>
          <Link to='/profile' className='flex items-center text-white hover:text-blue-500 transition duration-300'>
            {currentUser ? (
              <img
                className='rounded-full h-10 w-10 object-cover bg-gray-600 mr-2'
                src={currentUser.avatar}
                alt=''
              />
            ) : (
              'Sign In'
            )}
          </Link>
        </nav>
        <div className='md:hidden'>
          <button className='text-white'>
            <FaSearch />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
