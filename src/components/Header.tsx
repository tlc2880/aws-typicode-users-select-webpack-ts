import Nav from './Nav'
import IMAGE from './react.png'
import LOGO from './React.svg'

type HeaderProps = {
  currentUserId: number
  setCurrentUserId: React.Dispatch<React.SetStateAction<number>>
}

const Header = ({ currentUserId, setCurrentUserId }: HeaderProps) => {
  return (
    <header>
      <h1>
        <img src={IMAGE} alt="React Logo" width="30" height="30" />
        Suspense Skeleton Webpack TypeScript Typicode User Blogs
        <img src={LOGO} alt="React Logo" width="30" />
        <p>{process.env.NODE_ENV}</p>
      </h1>
      <br />
      <Nav currentUserId={currentUserId} setCurrentUserId={setCurrentUserId} />
    </header>
  )
}
export default Header
