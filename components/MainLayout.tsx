import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/Logo.svg'
import Search from './icons/Search'

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Head>
                <title key="title">Acung Rajut</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className='w-full min-h-[200vh] relative z-10'>
                <nav className='w-full h-[128px] mx-auto absolute z-10'>
                    <div className='flex items-center justify-between w-10/12 h-full mx-auto'>
                        <div className='mr-10 max-w-[320px] max-h-[72.78px]'>
                            <Image src={logo} alt='Acung Rajut Logo' className='drop-shadow-main' priority />
                        </div>

                        <ul className='hidden md:flex items-center font-semibold text-white justify-center font-nav text-xl xl:text-[28px]'>
                            <li className='mx-4 xl:mx-8'>
                                <a href='#' className='drop-shadow-main'>Collection</a>
                            </li>
                            
                            <li className='mx-4 xl:mx-8'>
                                <a href='#' className='drop-shadow-main'>Gallery</a>
                            </li>
                            
                            <li className='mx-4 xl:mx-8'>
                                <a href='#' className='drop-shadow-main'>Contact</a>
                            </li>
                            
                            <li className='ml-4 xl:ml-8'>
                                <div className='w-7 h-7'>
                                    <Search />
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                {children}
            </div>
        </>
    )
}

export const getLayout = (page: JSX.Element): JSX.Element => {
    return (
        <MainLayout>{page}</MainLayout>
    )
}

export default MainLayout
