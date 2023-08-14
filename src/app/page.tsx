// import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-[40px]'>
        <h4 className='text-white tracking-widest font-thin'>
          Creating something wonderful takes time.
        </h4>
        <div className="text-white flex gap-1">
          <a className='w-8 h-8 border border-1 border-[#ccc] rounded-full'
            href="https://github.com/mutasim77"
          >
            <AiFillGithub className='w-full h-full' />
          </a>
        </div>
      </div>
    </div>
  )
}
