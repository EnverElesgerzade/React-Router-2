import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className={styles.head}>
      <h1>RouterSite</h1>
      <div className={styles.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/basket'>Basket</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </div>
  )
}

export default Header
