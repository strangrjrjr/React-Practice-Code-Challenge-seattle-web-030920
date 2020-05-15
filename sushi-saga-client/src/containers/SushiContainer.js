import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         props.getSushi.map((fuckthis) => {
            return <Sushi key={fuckthis.id} isEaten={false} sushiInfo={fuckthis}/>
         })
      
        }

        
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer