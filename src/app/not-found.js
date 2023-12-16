'use client'
import { useRouter } from 'next/navigation'
export default function NotFound() {
  const router = useRouter()
  return (
    <div className='w-screen h-screen flex flex-col gap-10 bg-secondary items-center justify-center'>
      <h1 className='text-5xl font-bold text-main'>404 - Page Not Found</h1>
      <button onClick={e => router.back() } className='border-b-4 text-xl hover:scale-110 transition-all border-main'>
          Go Back
      </button>
    </div>
  )
}