import Image from 'next/image'
import React from 'react'

interface Props {
    product: Product
}

const Item: React.FC<Props> = ({ product }) => {
    return <div>
        <div className='relative border-8 rounded-lg border-secondary aspect-square shadow-item'>
            <Image src={product.image} alt={product.name} layout='fill' objectFit='cover' />
        </div>

        <div className='mt-3 text-lg font-semibold leading-tight text-black xl:leading-7 md:mt-4 xl:mt-5 lg:text-xl xl:text-2xl font-nav'>
            {product.name}
        </div>
    </div>
}

export default Item
