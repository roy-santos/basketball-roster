import React from "react";
import axios from "axios";

class PlayerForm extends React.Component {
  submitPlayer(event) {
    //event.preventDefault();

    axios
      .post("http://localhost:4000/players", {
        firstName: this.refs.firstName.value,
        lastName: this.refs.lastName.value,
        phone: this.refs.phone.value,
        email: this.refs.email.value,
        speed: this.refs.speed.value,
        strength: this.refs.strength.value,
        endurance: this.refs.endurance.value,
        ability: this.refs.ability.value,
        technique: this.refs.technique.value,
        tactical: this.refs.tactical.value,
        team: this.refs.team.value,
        coach: this.refs.coach.value,
      })
      .then((response) => {
        console.log(this.refs.coach.value);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="row">
        <h1 className="center">Add a new player</h1>
        <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
          <div className="row">
            <h5>Profile</h5>
            <div className="input-field col s6">
              <input
                className="firstName"
                ref="firstName"
                type="text"
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref="lastName" type="text" required />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field col s6">
              <input id="phone" ref="phone" type="number" required />
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref="email" type="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <h5>Attributes</h5>
            <div className="col s4 ">
              <label htmlFor="speed">Speed</label>
              <p class="range-field">
                <input
                  type="range"
                  id="speed"
                  ref="speed"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <div className="col s4 ">
              <label htmlFor="strength">Strength</label>
              <p class="range-field">
                <input
                  type="range"
                  id="strength"
                  ref="strength"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <div className="col s4 ">
              <label htmlFor="endurance">Endurance</label>
              <p class="range-field">
                <input
                  type="range"
                  id="endurance"
                  ref="endurance"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <div className="col s4 ">
              <label htmlFor="ability">Ability</label>
              <p class="range-field">
                <input
                  type="range"
                  id="ability"
                  ref="ability"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <div className="col s4 ">
              <label htmlFor="technique">Technique</label>
              <p class="range-field">
                <input
                  type="range"
                  id="technique"
                  ref="technique"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <div className="col s4 ">
              <label htmlFor="tactical">Tactical</label>
              <p class="range-field">
                <input
                  type="range"
                  id="tactical"
                  ref="tactical"
                  min="1"
                  max="3"
                  defaultValue="1"
                />
              </p>
            </div>
            <h5>Affiliation</h5>
            <div className="input-field col s4">
              <input id="team" ref="team" type="text" required />
              <label htmlFor="team">Team</label>
            </div>
            <div className="col s12">
              <p>
                <label>
                  <input
                    id="coach"
                    ref="coach"
                    name="isCoach"
                    type="radio"
                    value="true"
                  />
                  <span>Coach</span>
                </label>
              </p>
              <p>
                <label>
                  <input name="isCoach" type="radio" value="false" checked />
                  <span>Player</span>
                </label>
              </p>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Player
          </button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
