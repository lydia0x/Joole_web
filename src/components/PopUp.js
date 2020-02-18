import React, { Component } from "react";
import styles from './PopUp.module.css';
import * as actions from '../actions/auth';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  userName = localStorage.getItem("username");
  url_image = localStorage.getItem("image");


  logOut = () => {
    actions.logout();
  }



  render() {
    return (
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <span className={styles.close} onClick={this.handleClick}>
            &times;
          </span>
          <form>
          <input className={styles.image} type="image" src={this.url_image} />
          <br />
          <br />
          <br />
          <br />
            <h3>{this.userName}</h3>
            
            <input className={styles.edit_profile}
              type='submit' 
              value=' Edit Profile '
              disabled= 'true'
            />
            <input className={styles.log_out} onClick={this.logOut}
              type='submit' 
              value=' Log Out '
            />
          </form>
        </div>
      </div>
    );
  }
}
