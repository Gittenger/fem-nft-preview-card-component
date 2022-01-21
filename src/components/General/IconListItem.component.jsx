import React from 'react'

const IconListItem = ({
  imgSrc,
  altText,
  textContent,
  color,
  iconWidth,
  className,
}) => {
  const groupStyles = `flex justify-start items-center`
  const iconStyles = `${iconWidth === 'sm' ? 'w-2.5' : 'w-3.5'}`
  const textStyles = `text-md flex items-center justify-center ml-2`

  return (
    <div className={`${groupStyles} ${className}`}>
      <img className={iconStyles} src={imgSrc} alt={altText} />
      <p
        className={`${
          color === 'cyan' ? 'text-cyan' : ''
        } font-semibold ${textStyles}`}
      >
        {textContent}
      </p>
    </div>
  )
}

export default IconListItem
