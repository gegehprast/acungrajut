import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/Logo.svg'
import Banner from './Banner'
import MenuAlt from './icons/MenuAlt'
import Search from './icons/Search'
import Logo from './Logo'

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
                <nav className='w-full h-[64px] lg:h-[128px] mx-auto absolute z-10'>
                    <div className='flex items-center justify-between w-11/12 h-full mx-auto text-white lg:w-10/12'>
                        <div className='w-7 h-7 drop-shadow-main md:hidden'>
                            <MenuAlt />
                        </div>

                        <div className='lg:mr-10 max-w-[180px] md:max-w-[240px] xl:max-w-[320px] aspect-[16/3.60]'>
                            <Logo />
                        </div>

                        <ul className='hidden md:flex items-center font-semibold justify-center font-nav text-xl xl:text-[28px]'>
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
                                <div className='w-7 h-7 drop-shadow-main'>
                                    <Search />
                                </div>
                            </li>
                        </ul>

                        <div className='w-7 h-7 drop-shadow-main md:hidden'>
                            <Search />
                        </div>
                    </div>
                </nav>

                <header className="relative w-full h-screen overflow-hidden">
                    <Banner />
                </header>

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
