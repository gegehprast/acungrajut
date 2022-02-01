import Head from 'next/head'
import Header from './Header'
import Nav from './Nav'

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
                <Nav />

                <Header />

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
