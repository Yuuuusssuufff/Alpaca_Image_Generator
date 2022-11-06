import React from 'react'

const ImageSection = ({handleRandom, handleDownload, setUp}) => {
  return (
        <section className="section one">
          <div className="image_section">
            {Object.keys(setUp).map((butt) => (
              <img key={butt} className={butt} src={setUp[butt]} alt={butt} />
            ))}
          </div>
          <div className="button">
            <button onClick={handleRandom}>Random</button>
            <button onClick={handleDownload} className="download">
              Download
            </button>
          </div>
        </section>
    
  )
}

export default ImageSection