import React, { Component } from "react";
import styles from './PopUp.module.css';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  userName = localStorage.getItem("username");
  url_image = localStorage.getItem("image");

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
            <h2>{this.userName}</h2>
            
            <input className={styles.edit_profile}
              type='submit' 
              value=' Edit Profile '
            />
            <input className={styles.log_out}
              type='submit' 
              value=' Log Out '
            />
          </form>
        </div>
      </div>
    );
  }
}
