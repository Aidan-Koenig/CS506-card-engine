import React from 'react';
import './Player.css';

import cardBackImage_top from '../../../assets/images/figure_1.png';
import cardBackImage_right from '../../../assets/images/figure_2.png';
import cardBackImage_bottom from '../../../assets/images/figure_3.png';
import cardBackImage_left from '../../../assets/images/figure_4.png';


function Player({ name, cards = [], position, isCpu = false }) {
  const cardOrientation = position ;
  

  return (
    <div className={`Player ${position}`}>
      <h2 className="player-name">{name}</h2>
      <div className={`cards ${cardOrientation}`}>
      </div>

        {
            position ==='top'? <div className={`imgY`}><img src={cardBackImage_top}  /> </div>:(
                position ==='bottom'? <div className={`imgY`}><img src={cardBackImage_bottom} /> </div>:(
                    position ==='left'? <div className={`imgX`}><img src={cardBackImage_left} /> </div>:(
                        <div className={`imgX`}><img src={cardBackImage_right} /> </div>
                    )
                )

            )
        }

    </div>
  );
}

export default Player;