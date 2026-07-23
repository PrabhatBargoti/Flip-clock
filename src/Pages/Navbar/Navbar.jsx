import React, { useState } from 'react'
import { navItems } from '../../Utils/nav'
import NavItem from '../../Components/Nav/NavOption'
import NavLogo from '../../Components/Nav/NavLogo'

const Navbar = () => {
  const [active, setActive] = useState('Clock')

  return (
    <div className='h-[calc(100vh-1.5rem)] w-64 bg-[#111113] border border-gray-800/80 relative rounded-4xl m-3 p-6 flex flex-col'>
        <NavLogo />
      <ul className='flex flex-col gap-1'>
        {navItems.map(({ name, icon }, i) => (
          <NavItem
            key={name}
            index={i}
            name={name}
            icon={icon}
            isActive={active === name}
            onClick={() => setActive(name)}
          />
        ))}
      </ul>
    </div>
  )
}

export default Navbar