import React, { useState } from 'react'

const Navbar = () => {
    const [active, setactive] = useState('home')
  return (
    <div className='w-full h-[12vh] flex justify-between bg-[#ECF2F7] fixed z-[99] px-5 items-center'>
        <div>
            <img className='w-[20%]' src="https://s3-alpha-sig.figma.com/img/6b1a/bfc8/ccfecc993d38ead826d05f83d59d98fa?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF6gkLJyHbJ1bsbx7U~OvtWhP10L6CGdnyq80Ek2eR6wILLI8apRcqEB4qyzS0E51YdqKz5JeEuHciiqSwUGnhhZVOhZmsUQb7iUPSex6K164RFWuYWNG1qkz~ePt4CA3lcL-Q5MzR-KSvSvLqwz0adQ0xWMivl90ZLRE9xD3F04Sti5ZScZXPyr~IuriAMzuh7-cipS5aHjUUy4LONoQICmYLoTnrXe7T~0oXu~6Vh-79ywuRmqiXLmy22HnDi53R7Kv3dMRA-Ri2S-dEqJRLQVjpX2K5dDcfw5aEWDZ85VB~xgcTzDpoDqJNpEdr7ijW-NWW2IzcRbx~SM3nV0AQ__" alt="" />
        </div>
        <div className='flex items-center gap-8 mr-[4vw]'>
            {
                ['home','about','features','pricing','contact us','testnomials'].map((item,index)=>{
                    return <h1 onClick={()=> setactive(item)} className={`text-xl transition-all cursor-pointer nico capitalize ${item === active ? 'text-[#ae1d1d] mb-1' : 'text-black'}`}> {item}{item === active ? <hr  className='w-full h-1 transition-all rounded-full bg-[#ae1d1d]'/>:''} </h1>
                })
            }
        </div>
    </div>
  )
}

export default Navbar