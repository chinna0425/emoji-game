import {Component} from 'react'
import Navbar from '../NavBar'
import EmojiCards from '../EmojiCard'
import WinorLosscard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, tscore: 0, l: [], status: false}

  newgame = () => {
    const {status} = this.state
    this.setState({score: 0, status: !status})
  }

  addscore = id => {
    const {l, status} = this.state
    const latest = {id}
    const updated = [...l, latest]
    const res = l.filter(each => each.id === id)
    if (res.length === 1) {
      this.setState(prev => ({
        score: prev.score,
        tscore: prev.tscore,
        status: !status,
        l: [],
      }))
    } else if (updated.length === 12 && res.length === 0) {
      this.setState(prev => ({
        score: prev.score + 1,
        tscore: prev.tscore + 1,
        status: !status,
        l: [],
      }))
    } else {
      this.setState(prev => {
        if (prev.score >= prev.tscore) {
          return {
            score: prev.score + 1,
            tscore: prev.tscore + 1,
            l: updated,
          }
        }
        return {
          score: prev.score + 1,
          tscore: prev.tscore,
          l: updated,
        }
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, tscore, status} = this.state
    emojisList.sort(() => Math.random() - 0.5)
    return (
      <div className="background-container">
        <Navbar score={score} tscore={tscore} status={status} />
        <div className="second-container">
          {!status && (
            <ul className="emojilists">
              {emojisList.map(eachitem => (
                <EmojiCards
                  each={eachitem}
                  key={eachitem.id}
                  addscore={this.addscore}
                />
              ))}
            </ul>
          )}
          {status && (
            <WinorLosscard
              status={status}
              newgame={this.newgame}
              score={score}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
