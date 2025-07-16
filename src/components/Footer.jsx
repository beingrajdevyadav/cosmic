import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer>
<p>Cosmic Powered By Rajdev Yadav</p>
<p>All Rights Reserved &copy; {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer