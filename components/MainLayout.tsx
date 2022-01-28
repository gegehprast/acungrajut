import Head from 'next/head'

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

            {children}
        </>
    )
}

export const getLayout = (page: JSX.Element): JSX.Element => {
    return (
        <MainLayout>{page}</MainLayout>
    )
}

export default MainLayout
