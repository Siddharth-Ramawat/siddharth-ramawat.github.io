import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://linkedin.com/in/siddharthramawat" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/Siddharth-Ramawat" target="_blank"><BsGithub/></a>
    <a href="https://www.facebook.com/siddharth.ramawat/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials