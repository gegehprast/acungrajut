import Banner from '../components/Banner'
import WaveLower from '../components/WaveLower'
import WaveUpper from '../components/WaveUpper'

export default function Home() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <WaveUpper />
            
            <section className='w-full'>
                <div className='font-nav font-semibold text-7xl w-full h-[100px] leading-none align-middle text-center text-white drop-shadow-main'>
                    <span>Featured</span>
                </div>

                <div className='grid w-11/12 h-full grid-flow-cols lg:grid-flow-rows lg:grid-cols-3 gap-4 lg:gap-[60px] mx-auto text-white  lg:w-10/12'>
                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>

                    <div>
                        <div className='border-8 rounded-lg border-secondary aspect-square'>

                        </div>
                    </div>
                </div>
            </section>

            <div className='mt-[48rem]'>

            </div>

            <WaveLower />
        </div>
    )
}
