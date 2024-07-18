import './index.css'

const WinorLosscard = props => {
  const {score, newgame} = props
  const img =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const val = score === 12 ? 'You Won' : 'You Lose'
  const newstart = () => {
    newgame()
  }
  return (
    <div className="winnorloss">
      <div className="winningcontainer">
        <h1 className="winning">{val}</h1>
        <p className="winning1">Best Score</p>
        <p className="spanele">{score}/12</p>
        <br />
        <button type="button" className="button1" onClick={newstart}>
          Play Again
        </button>
      </div>
      <img src={img} alt="win or lose" className="imagesetting" />
    </div>
  )
}
export default WinorLosscard
