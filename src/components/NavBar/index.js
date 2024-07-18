import './index.css'

const Navbar = props => {
  const {score, tscore, status} = props
  const res = status ? 'adding' : ''
  return (
    <nav className="navcontainer">
      <div className="scores-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div className={`scores-container ${res}`}>
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {tscore}</p>
      </div>
    </nav>
  )
}
export default Navbar
