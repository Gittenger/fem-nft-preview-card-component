import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index'
import styles from './styles/ItemCard.module.css'

const {
  img: { MainImg, AvatarImg },
  svg: { EthImg, ClockImg },
} = images

const arbStyles = {
  line: {},
  avatarWrapper: {
    width: '32px',
    height: '32px',
  },
  avatar: {
    width: '95%',
  },
}

const ItemCard = () => {
  const { IconListItem } = CIndex

  return (
    <div
      className={`bg-darkBlue-bgCard rounded-2xl font-body text-softBlue p-5 ${styles.wrapper} `}
    >
      <div>
        <img className="rounded-lg" src={MainImg} alt="" />
      </div>
      <div className="mt-5">
        <h1 className="text-white font-bold text-2xl">Equilibrium #3429</h1>
        <p className="mt-3.5 mb-5 leading-relaxed">
          Our equilibrium collection promotes balance and calm.
        </p>

        <div className="flex justify-start items-center">
          <IconListItem
            imgSrc={EthImg}
            color="cyan"
            textContent="0.041 ETH"
            className="mr-auto"
          />
          <IconListItem
            imgSrc={ClockImg}
            color="none"
            textContent="0.041 ETH"
          />
        </div>
      </div>
      <div className="h-px w-full my-3 bg-darkBlue-line"></div>
      <div className="mt-4 flex justify-start items-center">
        <div
          className="rounded-full bg-white relative flex justify-center items-center mr-5"
          style={arbStyles.avatarWrapper}
        >
          <img
            className="absolute"
            src={AvatarImg}
            alt=""
            style={arbStyles.avatar}
          />
        </div>
        <p>
          Creation of <span className="text-white">Jules Wyvern</span>
        </p>
      </div>
    </div>
  )
}

export default ItemCard
