import Link from 'next/link'

const Nav = () => {
  return (
    <div>
      <Link href='/'><img src="logo.png" alt="logo" /></Link>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/products'>Products & Services</Link>
        <Link href='/career'>Career</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav
