import axios from 'axios';
import React from 'react';

const PlayerSingle = (props) => {
  let srcURL;
  if (props.player.firstName === undefined) {
    srcURL = 'images/lakerslogo.jpg';
  } else {
    srcURL =
      'images/' + props.player.firstName + props.player.lastName + '.jpg';
  }

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div className='card-image'>
            <img src={srcURL} alt='Basketball Player' height='600' />
            <span className='card-title'>
              {props.player.firstName} {props.player.lastName}
            </span>
          </div>
          <div className='card-content'>
            <p>
              Phone: {props.player.phone} - Email: {props.player.email}
            </p>
            <p>
              Speed: {props.player.speed} - Strength:
              {props.player.strength} - Endurance: {props.player.endurance}
            </p>
            <p>
              Ability: {props.player.ability} - Technique:
              {props.player.techniques} - Tactical:{props.player.tactical}
            </p>
          </div>
          <div className='card-action'>Team: {props.player.team}</div>
          <div className='center'>
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'
            >
              Delete Player
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PlayerSingle;
