import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index'
import styles from './styles/ItemCard.module.css'

const {
  img: { MainImg },
  svg: { EthImg, ClockImg, EyeImg },
} = images

const ItemCard = () => {
  const { IconListItem } = CIndex

  return (
    <div
      className={`bg-darkBlue-bgCard rounded-2xl font-body text-softBlue p-5 ${styles.wrapper} `}
    >
      <div className="relative">
        <div
          className={`group absolute duration-300 cursor-pointer top-0 left-0 w-full h-full flex justify-center items-center rounded-2xl bg-cyan hover:bg-cyan bg-opacity-0 hover:bg-opacity-50`}
        >
          <img
            className="group-hover:opacity-100 opacity-0 duration-300"
            src={EyeImg}
            alt=""
          />
        </div>
        <img className="rounded-lg" src={MainImg} alt="" />
      </div>
      <div className="mt-5">
        <h1 className="text-white font-bold text-2xl duration-300 hover:text-cyan cursor-pointer">
          Equilibrium #3429
        </h1>
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
      <div className="h-px w-full my-5 bg-darkBlue-line"></div>
      <div className="flex justify-start items-center">
        <div
          className={`border-2 border-white mr-5 rounded-full ${styles.circle}`}
        ></div>
        <p>
          Creation of{' '}
          <span className="text-white duration-300 cursor-pointer hover:text-cyan">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  )
}

export default ItemCard
