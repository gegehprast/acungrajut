import React from 'react'

const Banner = () => {
    return <svg className='absolute w-auto h-[60vh] align-middle -right-1/4 lg:right-0 lg:w-full lg:h-auto lg:aspect-[1440/882]' 
        viewBox="0 0 1440 882" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"    
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M1440 0H1216.5C1064.41 860.344 469.527 746.375 116.405 678.723C73.6553 670.533 34.4486 663.021 0 658V882H1440V0Z" fill="#F06095"/>
        <path d="M1216.5 0H0V658C34.4486 663.021 73.6553 670.533 116.405 678.723C469.527 746.375 1064.41 860.344 1216.5 0Z" fill="#FFB1CE"/>
        <rect x="728.583" y="303.259" width="483.678" height="483.678" transform="rotate(-11.7314 728.583 303.259)" fill="url(#pattern0)"/>
        <mask id="mask0_16_65" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="728" y="204" width="573" height="573">
            <rect x="735.678" y="307.914" width="471.678" height="471.678" transform="rotate(-11.7314 735.678 307.914)" stroke="#F06095" strokeWidth="12"/>
        </mask>
        <g mask="url(#mask0_16_65)">
            <path fillRule="evenodd" clipRule="evenodd" d="M1440 0H1216.5C1064.41 860.344 469.527 746.375 116.405 678.723C73.6553 670.533 34.4486 663.021 0 658V882H1440V0Z" fill="#F06095"/>
            <path d="M1216.5 0H0V658C34.4486 663.021 73.6553 670.533 116.405 678.723C469.527 746.375 1064.41 860.344 1216.5 0Z" fill="#FFB1CE"/>
        </g>
        <mask id="mask1_16_65" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="728" y="204" width="573" height="573">
            <rect x="735.678" y="307.914" width="471.678" height="471.678" transform="rotate(-11.7314 735.678 307.914)" stroke="#FFB1CE" strokeWidth="12"/>
        </mask>
        <g mask="url(#mask1_16_65)">
            <path fillRule="evenodd" clipRule="evenodd" d="M1440 0H1216.5C1064.41 860.344 469.527 746.375 116.405 678.723C73.6553 670.533 34.4486 663.021 0 658V882H1440V0Z" fill="#FFB1CE"/>
            <path d="M1216.5 0H0V658C34.4486 663.021 73.6553 670.533 116.405 678.723C469.527 746.375 1064.41 860.344 1216.5 0Z" fill="#F06095"/>
        </g>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_16_65" transform="scale(0.000960615)"/>
            </pattern>
            
            <image id="image0_16_65" width="1041" height="1041" href="/banner.jpg"/>
        </defs>
    </svg>

}

export default Banner
