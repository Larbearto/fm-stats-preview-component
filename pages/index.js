import Head from 'next/head'
import Image from 'next/image'
import Pic from '../public/image-header-desktop.jpg'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen overflow-hidden max-w-screen bg-bluedark'>
      <div className='flex flex-col w-[324px] lg:flex lg:w-[1100px] lg:flex-row-reverse justify-center py-8'>
        <div className='relative flex justify-center overflow-hidden bg-violetsoft rounded-t-xl lg:rounded-r-xl lg:rounded-l-none '>
          <Image
            src={Pic}
            alt='Hero'
            objectFit='cover'
            className='absolute inset-0 w-full h-full opacity-80 mix-blend-multiply'
          />
        </div>
        <div className=' bg-bluedesaturated rounded-b-xl lg:rounded-l-xl lg:rounded-r-none lg:w-1/2'>
          <div className='flex flex-col items-center justify-center m-8 text-center lg:m-20 lg:text-left'>
            <h1 className='pb-5 text-[26px] font-semibold lg:pb-8 font-Inter lg:text-4xl'>
              Get<span className='font-medium text-violetsoft font-LexendDeca '> insights </span>
              that help your business grow.
            </h1>
            <p className='pb-4 text-[15px] text-whiteMain lg:text-left lg:pb-14 lg:mr-10'>
              Discover the benefits of data analytics and make better decisions regarding revenue,
              customer experience, and overall efficiency.
            </p>
            <div className='flex flex-col justify-center w-full m-5 space-y-8 data-container lg:flex lg:flex-row sm:space-y-8 lg:space-y-0 lg:m-0 lg:justify-start lg:space-x-16 sm:items-center'>
              <div className='category '>
                <p className='text-2xl font-semibold text-white lg:pb-1'>10k+</p>
                <p className='text-sm font-normal tracking-wider uppercase text-whiteMain'>
                  companies
                </p>
              </div>
              <div className='category'>
                <p className='text-2xl font-semibold text-white lg:pb-1'>314</p>
                <p className='text-sm font-normal tracking-wider uppercase text-whiteMain'>
                  templates
                </p>
              </div>
              <div className='category'>
                <p className='text-2xl font-semibold text-white'>12M+</p>
                <p className='text-sm font-normal tracking-wider uppercase text-whiteMain'>
                  queries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
