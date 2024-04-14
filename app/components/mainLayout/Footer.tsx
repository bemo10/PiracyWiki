import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-row justify-center pb-8 gap-4 text-xs text-slate-700'>
            <div className='hover:link'>Disclaimer</div>
            <div className='hover:link'>Privacy Policy</div>
            <div className='hover:link'>Content Policy</div>
            <div className='hover:link'>User Agreement</div>
        </div>
    )
}

export default Footer