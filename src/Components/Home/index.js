import {Component} from 'react'

import LanguageTabItem from '../LanguageTabItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeTabId: languageGreetingsList[0].id,
  }

  getLanguageDetails = id => {
    this.setState({
      activeTabId: id,
    })
  }

  getFilterLanguage = () => {
    const {activeTabId} = this.state
    const filterData = languageGreetingsList.filter(
      each => each.id === activeTabId,
    )
    return filterData
  }

  render() {
    const {activeTabId} = this.state
    const displayGreetingMsg = this.getFilterLanguage()
    // console.log(displayGreetingMsg)
    return (
      <div className="app-container">
        <h1 className="title">Multilingual Greetings</h1>
        <ul className="tabs-container">
          {languageGreetingsList.map(eachItem => (
            <LanguageTabItem
              key={eachItem.id}
              languageItemDetails={eachItem}
              isActive={eachItem.id === activeTabId}
              getLanguageDetails={this.getLanguageDetails}
            />
          ))}
        </ul>
        <div className="container">
          <img
            src={displayGreetingMsg[0].imageUrl}
            alt={displayGreetingMsg[0].imageAltText}
            className="image-size"
          />
        </div>
      </div>
    )
  }
}
export default Home
