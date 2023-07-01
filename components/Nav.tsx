import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='p-5 sticky top-0 w-full shadow-xl'>
        <div className='maincol flex justify-between items-center'>
            <div className='font-mono italic text-3xl underline underline-offset-4'>Bvcr</div>
            <div className='flex gap-10'>
                <Link href='/about'>About</Link>
                <Link href='/skills'>Skills</Link>
                <Link href='/projects'>Projects</Link>
            </div>
        </div>
    </div>
  )
}
