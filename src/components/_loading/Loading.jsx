import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
     return (
          <div className={'w-full h-screen bg-[white] flex justify-center items-center abolute z-99' }>
               <span className={styles.loader}></span>
          </div>
     )
}

export default Loading