import React from 'react'
import Image from 'next/image'

const SideBarFooter = () => {
  return (
      <div className='flex flex-row justify-center gap-6 mt-auto py-8'>
          <a href="https://www.github.com/" target='_blank'>
              <Image src="/assets/icons/github.png" alt='piracy' width={24} height={24} quality={100}></Image>
          </a>
          <a href="https://www.patreon.com/" target='_blank'>
              <Image src="/assets/icons/patreon.png" alt='piracy' width={24} height={24} quality={100}></Image>
          </a>
          <a href="https://www.reddit.com/" target='_blank'>
              <Image src="/assets/icons/reddit.png" alt='piracy' width={24} height={24} quality={100}></Image>
          </a>
    </div>
  )
}

export default SideBarFooter