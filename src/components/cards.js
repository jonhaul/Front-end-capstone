import React from 'react';
import CardItems from './card-items';
import Art1 from '../../static/art1.png'
import Art2 from '../../static/art2.png'


function cards() {
  return (
    <div className='cards'>
        <h1>Check out these awesome art pieces!</h1>
        <div className="cards__container">
            <div className="cards__wrap">
                <ul className="cards__items">
                    <CardItems
                    src="../../static/art1.png"
                    text="explore this area! test"
                    label='Contact'
                    path='/contact'
                    />
                    <CardItems
                    src="../../static/art2.png"
                    text="View Gallery"
                    label='Gallery'
                    path='/gallery'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default cards