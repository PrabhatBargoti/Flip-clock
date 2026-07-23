import React from 'react'
import { Clock } from 'lucide-react'

const NavLogo = () => {
  return (
    <div className='flex items-center gap-2.5 pb-8'>
        <div className='w-8 h-8 rounded-full border border-amber-400/40 flex items-center justify-center'>
                <Clock size={14} className='text-amber-400' strokeWidth={1.8} />
        </div>
        <div>
            <h1 className='text-[15px] font-medium text-white leading-none'>Focus Clock</h1>
        </div>
    </div>
  )
}

export default NavLogo
