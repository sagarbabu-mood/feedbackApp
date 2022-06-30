import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {status: true}

  changeStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  render() {
    const {status} = this.state
    console.log(status)
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    return (
      <div className="bg-container">
        {status ? (
          <div className="container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(each => (
                <li className="emoji">
                  <button
                    className="button"
                    type="button"
                    onClick={this.changeStatus}
                    key={each.id}
                  >
                    <img
                      src={each.imageUrl}
                      alt={each.name}
                      className="emoji-image"
                    />
                  </button>
                  <p className="emoji-name">{each.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
            <h1 className="thank-you"> Thank You!</h1>
            <p className="description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
