import React, { useEffect } from 'react'

const FlipClock = () => {
  const Clock = ()=>{
        const [now, setnow] = useState(new Date())
        
        useEffect(()=>{
            const interval = setInterval(() => {
                setnow(new Date())
            }, 1000);

            return () => clearinterval(interval)
        })

        const[d1, d2] = String(value).padStart(2, '0').split('')
    }
  return (
    <div>
      
    </div>
  )
}

export default FlipClock
