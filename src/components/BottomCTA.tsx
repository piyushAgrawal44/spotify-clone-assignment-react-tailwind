import WhiteButton from './WhiteButton'

export default function BottomCTA() {
    return (
        <>
            <div className='hidden lg:block bg-gradient-to-r from-[#ae2896] to-[#519af4] fixed w-[calc(100%-12px)] left-[6px] bottom-2 p-2 z-20'>
                <div className='flex gap-2 justify-between items-center'>
                    <div className='text-[12px] font-medium'>
                        <p>Preview of spotify</p>
                        <p className='line-clamp-2'>Signup to get unlimited songs and podcast with occasional ads. No credit card required.</p>
                    </div>
                    <div className='shrink-0'>
                        <WhiteButton text="Signup for free" />
                    </div>

                </div>
            </div>
        </>
    )
}
