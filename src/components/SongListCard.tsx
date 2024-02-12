export default function SongListCard(props: any) {
    return (
        <>
            <div className="w-full flex justify-between items-center cursor-pointer rounded-md p-2 hover:bg-[#282828] group relative overflow-hidden">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <img src={props.song.thumbnail} className="rounded-md w-[40px]" alt="song" />
                        <div className="absolute hidden group-hover:flex items-center justify-center w-full h-full  text-2xl top-0 left-0">
                            <i className="bi bi-play-fill"></i>
                        </div>
                    </div>
                    <div className="">
                        <h6 className="text-sm mb-1 line-clamp-1">{props.song.name}</h6>
                        <p className="text-[10px] text-[#a7a7a7]">{props.song.author}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="text-[12px] text-[#a7a7a7] invisible group-hover:visible"><i className="bi bi-heart"></i></span>
                    <span className="text-[12px] text-[#a7a7a7]">{props.song.duration}</span>
                    <span className="text-[12px] text-[#a7a7a7] invisible group-hover:visible"><i className="bi bi-three-dots"></i></span>
                </div>


            </div>

        </>
    )
}
