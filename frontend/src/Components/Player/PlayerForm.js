import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
    this.speedInput = React.createRef();
    this.strengthInput = React.createRef();
    this.enduranceInput = React.createRef();
    this.abilityInput = React.createRef();
    this.techniqueInput = React.createRef();
    this.tacticalInput = React.createRef();
    this.teamInput = React.createRef();
    this.coachInput = React.createRef();
  }
  submitPlayer(event) {
    //event.preventDefault();

    axios
      .post('http://localhost:4000/players', {
        firstName: this.firstNameInput.current.value,
        lastName: this.lastNameInput.current.value,
        phone: this.phoneInput.current.value,
        email: this.emailInput.current.value,
        speed: this.speedInput.current.value,
        strength: this.strengthInput.current.value,
        endurance: this.enduranceInput.current.value,
        ability: this.abilityInput.current.value,
        technique: this.techniqueInput.current.value,
        tactical: this.tacticalInput.current.value,
        team: this.teamInput.current.value,
        coach: this.coachInput.current.value,
      })
      .then((response) => {
        console.log(this.coachInput.current.value);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='row'>
        <h1 className='center'>Add a new player</h1>
        <form className='col s12' onSubmit={this.submitPlayer.bind(this)}>
          <div className='row'>
            <h5>Profile</h5>
            <div className='input-field col s6'>
              <input
                className='firstName'
                ref={this.firstNameInput}
                type='text'
                required
              />
              <label htmlFor='firstName'>First Name</label>
            </div>
            <div className='input-field col s6'>
              <input
                id='lastName'
                ref={this.lastNameInput}
                type='text'
                required
              />
              <label htmlFor='lastName'>Last Name</label>
            </div>
            <div className='input-field col s6'>
              <input id='phone' ref={this.phoneInput} type='number' required />
              <label htmlFor='phone'>Phone</label>
            </div>
            <div className='input-field col s6'>
              <input id='email' ref={this.emailInput} type='email' required />
              <label htmlFor='email'>Email</label>
            </div>
            <h5>Attributes</h5>
            <div className='col s4 '>
              <label htmlFor='speed'>Speed</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='speed'
                  ref={this.speedInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <div className='col s4 '>
              <label htmlFor='strength'>Strength</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='strength'
                  ref={this.strengthInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <div className='col s4 '>
              <label htmlFor='endurance'>Endurance</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='endurance'
                  ref={this.enduranceInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <div className='col s4 '>
              <label htmlFor='ability'>Ability</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='ability'
                  ref={this.abilityInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <div className='col s4 '>
              <label htmlFor='technique'>Technique</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='technique'
                  ref={this.techniqueInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <div className='col s4 '>
              <label htmlFor='tactical'>Tactical</label>
              <p className='range-field'>
                <input
                  type='range'
                  id='tactical'
                  ref={this.tacticalInput}
                  min='1'
                  max='3'
                  defaultValue='1'
                />
              </p>
            </div>
            <h5>Affiliation</h5>
            <div className='input-field col s4'>
              <input id='team' ref={this.teamInput} type='text' required />
              <label htmlFor='team'>Team</label>
            </div>
            <div className='col s12'>
              <p>
                <label>
                  <input
                    id='coach'
                    ref={this.coachInput}
                    name='isCoach'
                    type='radio'
                    value='true'
                  />
                  <span>Coach</span>
                </label>
              </p>
              <p>
                <label>
                  <input name='isCoach' type='radio' value='false' checked />
                  <span>Player</span>
                </label>
              </p>
            </div>
          </div>
          <button
            className='btn waves-effect waves-light'
            type='submit'
            name='action'
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
