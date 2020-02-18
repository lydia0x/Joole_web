// import React from 'react';


// export default  function Comparator() {
//     return <h2>Comparator</h2>;
// }

import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Header from '../components/Header';
import Product from './product';


import styles from './comparator.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



// export default  function Detail() {
//     return <h2>Detail</h2>;
// }

class Comparator extends Component {
  


  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Container className={styles.containers}>
            <Row className={styles.row_t}> 
              <Col
                className={styles.col_right}
                >

                <Container className={styles.container_right}>
                  <Row className={styles.row1_r}>
                    <Breadcrumbs aria-label="breadcrumb">
                      <Link color="rgb(52, 92, 115)"  href="/">
                        Mechanical
                      </Link>
                      <Link color="rgb(52, 92, 115)"  href="/project">
                        HVAC Fans
                      </Link>
                      <Typography color="inherit">Comparator</Typography>
                    </Breadcrumbs>
                  </Row>

                  <Row className={styles.row2_r}>
                    <Container className={styles.container_row2_r}>
                    {this.props.fanArr && this.props.fanArr.map((object, i) => {
                        return (
                          <div className={styles.fan_div}>
                            <div className={styles.fan_class1}>
                              <img className={styles.fan_image} src={object.fan_image}></img>
                              <p>{object.manufacturer}</p>
                              <p>{object.series}</p>
                              <p>{object.model}</p>
                            </div>
                            <div className={styles.fan_class2}>
                              <p>{object.airflow} CFM</p>
                              <p>{object.power_max}W at max speed</p>
                              <p>{object.sound_at_max_speed}dBA sound_at_max_speed</p>
                              <p>{object.fan_sweep_diameter}"fan sweep diameter</p>
                            </div >
                            <div className={styles.fan_class3}>
                              <p>Past specifications:</p>
                              <p>{object.firm} firm </p>
                              <p>{object.global} global</p>
                              
                            </div>
                          </div>
                        )
                      })}
                    </Container>
                  </Row>
                </Container>

              </Col>
            </Row>

          </Container>
        </div>

      </div>)
      ;
  };
}


const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,

    fanArr: state.auth.fanArr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setFansArr: (fanArr) => dispatch(actions.setFansArr(fanArr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comparator);

