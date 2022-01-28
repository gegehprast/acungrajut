import React from 'react'

const Banner = () => {
    return <svg className='absolute w-auto h-[70vh] align-middle -right-1/4 md:-right-[20%] lg:right-0 lg:w-full lg:h-auto bg-secondary' 
        viewBox="0 0 1440 900" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"    
    >
        <g id="Banner">
            <rect id="Image Frame" x="739.583" y="280" width="483.678" height="483.678" transform="rotate(-11.7314 739.583 280)" fill="url(#pattern0)">
                <animateTransform attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    dur="1000ms"
                    repeatCount="1"
                    additive="sum"
                    values="1000 0; 0 0; -30 0; -40 0; -0 0"
                    keyTimes="0; 0.4; 0.5; 0.9; 1"/>

                <animateTransform attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    from="0 0"
                    to="-100 0"
                    dur="100ms"
                    repeatCount="1"
                    additive="sum"
                    accumulate='sum'/>

                <animateTransform attributeName="transform"
                    attributeType="XML"
                    type="translate"
                    from="-100 0"
                    to="0 0"
                    dur="200ms"
                    repeatCount="1"
                    additive="sum"
                    accumulate='sum'/>
            </rect>

            <g id="Curve 2 Side">
                <path fillRule="evenodd" clipRule="evenodd" d="M1216.5 0H1440V900H0V671.429C34.4486 676.553 73.6553 684.217 116.405 692.574C314.044 731.211 601.915 777.347 831 663L847 739.5L1298 646.5L1204 195.5L1168.5 203C1200.91 121.182 1197.09 112.038 1216.5 0Z" fill="#F06095"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1216.5C1197.09 112.038 1200.91 121.182 1168.5 203L754 289.5L831 663C601.915 777.347 314.044 731.211 116.405 692.574C73.6553 684.217 34.4486 676.553 0 671.429V0Z" fill="#FFB1CE"/>
            </g>
            <g id="Upper - Mask Group">
                <mask id="mask0_16_65" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="739" y="181" width="573" height="573">
                    <rect id="Image Frame_2" x="746.678" y="284.655" width="471.678" height="471.678" transform="rotate(-11.7314 746.678 284.655)" stroke="#FFB1CE" strokeWidth="12"/>
                </mask>
                <g mask="url(#mask0_16_65)">
                    <g id="Curve 2 Side_2">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1440 0H1216.5C1064.41 877.902 469.527 761.607 116.405 692.574C73.6553 684.217 34.4486 676.553 0 671.429V900H1440V0Z" fill="#FFB1CE"/>
                        <path d="M1216.5 0H0V671.429C34.4486 676.553 73.6553 684.217 116.405 692.574C469.527 761.607 1064.41 877.902 1216.5 0Z" fill="#F06095"/>
                    </g>
                </g>
            </g>
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
