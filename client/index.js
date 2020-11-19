import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Main'

class Riddle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false,
    }
    this.toggleAnswer = this.toggleAnswer.bind(this)
  }
  toggleAnswer() {
    this.setState(prevState => ({ showAnswer: !prevState.showAnswer }))
  }
  render() {
    const { showAnswer } = this.state
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p>A box without hinges, key, or lid,</p>
        <p>yet golden treasure inside is hid.</p>
        <p style={{ fontStyle: 'italic' }}>What am I?</p>
        <button type="button" onClick={this.toggleAnswer}>
          {showAnswer ? 'HIDE' : 'SHOW'} ANSWER
        </button>
        {showAnswer ? <p>🥚 AN EGG 🍳</p> : null}
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<Riddle />, document.getElementById('app'))
