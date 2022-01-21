import React from 'react'

const IconListItem = ({ imgSrc, altText, textContent }) => {
  const groupStyles = `flex w-full`
  const iconStyles = 'w-3.5'
  const textStyles = `text-md flex items-center justify-center ml-2`

  return (
    <div className={groupStyles}>
      <img className={iconStyles} src={imgSrc} alt={altText} />
      <p className={`text-cyan font-semibold ${textStyles}`}>{textContent}</p>
    </div>
  )
}

export default IconListItem
