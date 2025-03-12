import React from 'react'

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <p className='text_p text-3xl'>K && S</p>
                    {/* BUTTON */}
                    <button className='btn btn-sm'>Work with me </button>
                </div>
            </div>
           
        </header>
    )
}

export default Header
