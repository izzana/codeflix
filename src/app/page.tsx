import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col bg-black'>
            <Image
              src='/banner.png'
              alt='MAID'
              fill
              className="h-[65vh] object-cover object-top lg:h-[95vh]"
            />
          </div>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            MAID
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rem
            laboriosam, reprehenderit asperiores molestiae dolorem? Soluta vero
            quisquam nesciunt alias quos, reiciendis praesentium dicta magnam
            iusto officia debitis ab! Assumenda?
          </p>

          <div className="flex space-x-3">
            <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5 bg-white text-black ">Play</button>
            <button className="md:text-xl; flex cursor-pointer items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:px-8 md:py-2.5 bg-gray-600 text-black ">More Info</button>
          </div>
        </div>
      </main>
    </div>
  );
}