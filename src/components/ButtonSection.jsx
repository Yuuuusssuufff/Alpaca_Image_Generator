import React from 'react'

const ButtonSection = ({buttonList, handleMain, setting, handlePart}) => {
  return (
    <section className="section two">
          <div className="button_section">
            <div className="button">
              {buttonList.map((button) => (
                <button
                  key={button}
                  onClick={handleMain}
                  value={button.toLowerCase()}
                  name={button.toLowerCase()}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="button">
              {Object.keys(setting).map((but) => (
                <button name={but} value={but} onClick={handlePart}>
                  {but}
                </button>
              ))}
            </div>
          </div>
        </section>
  )
}

export default ButtonSection