import './index.css'

const LanguageTabItem = props => {
  const {languageItemDetails, isActive, getLanguageDetails} = props
  const activeBtnClassName = isActive ? 'active' : ''
  const onClickLanguageItemBtn = () => {
    getLanguageDetails(languageItemDetails.id)
  }
  return (
    <li>
      <button
        type="button"
        className={activeBtnClassName}
        onClick={onClickLanguageItemBtn}
      >
        {languageItemDetails.buttonText}
      </button>
    </li>
  )
}
export default LanguageTabItem
