import React, { useState } from 'react';

const Navbar = () =>{

    const [open,setOpen] = useState(false);

    const toggleHandler = () =>{
        setOpen(!open)
    }

    return(
        <div className='mx-auto block md:flex justify-between items-center bg-slate-500 p-4'>
            <div className=''>
                <p>Logo</p>
            </div>
            {/* medium screen */}
            <div className="hidden md:flex gap-2 list-none">
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>
            </div>

            {/* small screens */}
            <div className="flex flex-col md:hidden list-none">
                <button onClick={toggleHandler} className='mx-auto'>Menu</button>
                <div className={`${open?'hidden':'block'} bg-slate-500 text-white`}>
                    <div className='flex flex-col justify-center items-center'>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>Contact</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;