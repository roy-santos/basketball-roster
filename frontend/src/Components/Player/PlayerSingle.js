import React from 'react';

class PlayerSingle extends React.Component {
  getPlayerImage(firstName, lastName) {
    let srcURL;
    if (firstName === undefined) {
      srcURL = 'images/lakerslogo.jpg';
    } else {
      srcURL = 'images/' + firstName + lastName + '.jpg';
    }
    return srcURL;
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='card'>
            <div className='card-image'>
              <img
                src={this.getPlayerImage(
                  this.props.player.firstName,
                  this.props.player.lastName
                )}
                alt='Basketball Player'
                height='600'
              />
              <span className='card-title'>
                {this.props.player.firstName} {this.props.player.lastName}
              </span>
            </div>
            <div className='card-content'>
              <p>
                Phone: {this.props.player.phone} - Email:{' '}
                {this.props.player.email}
              </p>
              <p>
                Speed: {this.props.player.speed} - Strength:
                {this.props.player.strength} - Endurance:{' '}
                {this.props.player.endurance}
              </p>
              <p>
                Ability: {this.props.player.ability} - Technique:
                {this.props.player.techniques} - Tactical:
                {this.props.player.tactical}
              </p>
            </div>
            <div className='card-action'>Team: {this.props.player.team}</div>
            <div className='center-align'>
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
  }
}

export default PlayerSingle;
