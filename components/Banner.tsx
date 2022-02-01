import React from 'react'

const Banner = () => {
    return <svg className='absolute top-0 h-full -right-40 md:right-0' 
        viewBox="0 0 400 187" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <rect width="400" height="186.833" fill="white"/>
        <path d="M400 187V0L357 2.31266e-05C357 2.31266e-05 381 107.5 294.5 153.5C208 199.5 200.5 163.5 164.5 153.5C128.5 143.5 88.5 169 58.5 156C28.5 143 0 112.5 0 112.5V187H400Z" fill="#F06095"/>
        <path d="M0 0V112.5C0 112.5 28.5 143 58.5 156C88.5 169 128.5 143.5 164.5 153.5C200.5 163.5 208 199.5 294.5 153.5C381 107.5 357 2.31266e-05 357 2.31266e-05L0 0Z" fill="#FFB1CE"/>
        <rect x="253.938" y="87.3568" width="92" height="92" rx="7" transform="rotate(-12.8233 253.938 87.3568)" fill="url(#pattern0)" stroke="#FFB1CE" strokeWidth="4"/>
        <rect x="253.938" y="87.3568" width="92" height="92" rx="7" transform="rotate(-12.8233 253.938 87.3568)" stroke="#FFB1CE" strokeWidth="4"/>
        <mask id="mask0_44_22" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="187">
            <path d="M0 0V112.5C0 112.5 28.5 143 58.5 156C88.5 169 128.5 143.5 164.5 153.5C200.5 163.5 208 199.5 294.5 153.5C381 107.5 357 2.31266e-05 357 2.31266e-05L0 0Z" fill="#FFB1CE"/>
        </mask>
        <g mask="url(#mask0_44_22)">
            <rect x="253.938" y="87.3568" width="92" height="92" rx="7" transform="rotate(-12.8233 253.938 87.3568)" stroke="#F06095" strokeWidth="4"/>
        </g>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_44_22" transform="translate(0 -0.000462107) scale(0.000924214)"/>
            </pattern>
            <image id="image0_44_22" width="1082" height="1083" href="/banner.jpg"/>
        </defs>
    </svg>


}

export default Banner
