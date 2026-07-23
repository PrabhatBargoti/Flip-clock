import React from 'react'

const NavItem = ({ index, name, icon: Icon, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className='relative flex items-center gap-3 pl-4 pr-3 py-3 cursor-pointer group'
    >
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-200
          ${isActive ? 'h-6 bg-amber-400' : 'h-0 bg-amber-400 group-hover:h-3'}`}
      />
      <span className={`text-[10px] font-mono tracking-widest transition-colors
        ${isActive ? 'text-amber-400' : 'text-gray-600 group-hover:text-gray-500'}`}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <Icon
        size={16}
        strokeWidth={isActive ? 2.2 : 1.6}
        className={`transition-colors ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}
      />
      <span className={`font-mono text-[13px] tracking-wide uppercase transition-colors
        ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
        {name}
      </span>
    </li>
  )
}

export default NavItem