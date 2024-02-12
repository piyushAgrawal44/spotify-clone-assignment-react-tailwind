import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SectionTitle from '../components/SectionTitle'
import Sidebar from '../components/Sidebar';
import data from '../data';
import Card from '../components/Card';
import Footer from '../components/Footer';
import BottomCTA from '../components/BottomCTA';

export default function HomePage() {
    return (
        <>
            <div className='w-full bg-black text-gray-50 min-h-screen '>


                <div className="relative  flex flex-wrap">
                    <Sidebar active="home" />

                    <div className='p-2 min-h-screen w-full lg:w-[80%] lg:ml-[20%]'>
                        <Navbar page="home" />

                        <div className='bg-[#121212] rounded-md p-2 mt-2 sm:mb-16'>
                            <div className='mb-7'>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <SectionTitle text="Smoothie Playlist" />
                                    <Link to="/" className='text-sm hover:underline'>Show All <i className='bi bi-chevron-right'></i></Link>
                                </div>
                                <div className='mt-2 relative w-full overflow-x-auto hide-scrollbar flex flex-nowrap sm:flex-wrap'>

                                    {
                                        data.spotify_playlist.map((image, index) => {
                                            return <Card key={index} index={index} image={image} />
                                        })
                                    }
                                </div>
                            </div>

                            <div className='mb-7'>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <SectionTitle text="Sleep" />
                                    <Link to="/" className='text-sm hover:underline'>Show All <i className='bi bi-chevron-right'></i></Link>
                                </div>
                                <div className='mt-2 relative w-full overflow-x-auto hide-scrollbar flex flex-nowrap sm:flex-wrap'>

                                    {
                                        data.spotify_playlist.map((image, index) => {
                                            return <Card key={index} image={image} />
                                        })
                                    }
                                </div>
                            </div>

                            <Footer />
                        </div>
                        
                    </div>

                </div>


                <BottomCTA />

            </div>
        </>
    )
}
