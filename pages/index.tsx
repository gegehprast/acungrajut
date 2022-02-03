import Banner from '../components/Banner'
import Item from '../components/Item'
import WaveLower from '../components/WaveLower'
import WaveUpper from '../components/WaveUpper'

const items: Product[] = []

for (let i = 0; i < 12; i++) {
    const number = (i+1).toString().length > 1 ? i+1 : '0' + (i+1)

    items.push({
        name: `Lava Gray Hand Bag ${number} - Tas Jinjing`,
        image: `/images/1200x1200/${number}.jpg`
    })
}

export default function Home() {
    return (
        <div className="relative w-full">
            <section className='relative w-full'>
                <WaveUpper />

                {/* section header */}
                <div className='w-full text-5xl font-semibold leading-none text-center text-white md:p-5 font-nav md:text-7xl drop-shadow-main'>
                    Featured
                </div>

                {/* section body */}
                <div className='grid w-11/12 h-full grid-flow-cols lg:grid-flow-rows md:grid-cols-3 gap-4 gap-y-10 md:gap-6 lg:gap-8 xl:gap-[60px] mx-auto text-white lg:w-10/12 pb-[48rem]'>
                    {items.map((item, i) => <Item key={i} product={item} />)}
                </div>

                <WaveLower />
            </section>
        </div>
    )
}
