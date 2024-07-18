import './index.css'

const EmojiCards = props => {
  const {each, addscore} = props
  const {id, emojiName, emojiUrl} = each
  const gotoaddscore = () => {
    addscore(id)
  }
  return (
    <li className="emojicard">
      <button className="button" type="button" onClick={gotoaddscore}>
        <img src={emojiUrl} alt={emojiName} className="imgsetting" />
      </button>
    </li>
  )
}
export default EmojiCards
