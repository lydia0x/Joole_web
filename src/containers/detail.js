// import React from 'react';


// export default  function Detail() {
//     return <h2>Detail</h2>;
// }

import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userInfo';
import Header from '../components/Header';
import Product from './product';


import styles from './detail.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

import { Tabs, Tab, Panel } from '@bumaga/tabs'
import documentation from '../assets/documentation.png';


class Detail extends Component {

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
                      <Link color="rgb(52, 92, 115)" href="/">
                        Mechanical
                      </Link>
                      <Typography color="inherit">HVAC Fans</Typography>
                    </Breadcrumbs>
                  </Row>

                  <Row className={styles.row2_r}>


                    <Container className={styles.container_row2_r}>
                      {this.props.selectedFan && (
                        <div className={styles.tab}>
                          <Tabs>
                            <div>
                              <Tab><button className={styles.tab_button}>Product Summary</button></Tab>
                              <Tab><button className={styles.tab_button}>Product Details</button></Tab>
                              <Tab><button className={styles.tab_button}>Product Documentation</button></Tab>
                              <Tab><button className={styles.tab_button}>Contact</button></Tab>
                            </div>

                            <Panel name="Product Summary">
                              <div className={styles.fan_div}>
                                <div >
                                  <p className={styles.title}>Product Summary</p>
                                  <img className={styles.fan_image} src={this.props.selectedFan.fan_image}></img>
                                  <p className={styles.sub_title}>DESCRIPTION:</p>
                                  <p>Manufacturer: {this.props.selectedFan.manufacturer}</p>
                                  <p>Series: {this.props.selectedFan.series}</p>
                                  <p>Model: {this.props.selectedFan.model}</p>
                                </div>
                                <div >
                                  <p className={styles.sub_title}>TYPE:</p>
                                  <p>Use Type: {this.props.selectedFan.use_type}</p>
                                  <p>Application: {this.props.selectedFan.application}</p>
                                  <p>Mounting Location: {this.props.selectedFan.mounting_location}</p>
                                  <p>Accessories: {this.props.selectedFan.accessories}</p>
                                  <p>Model year: {this.props.selectedFan.model_year}</p>
                                </div>

                              </div>

                            </Panel>
                            <Panel name="Product Details">
                              <div className={styles.fan_div}>
                                <p className={styles.title}>Product Details</p>
                                <p className={styles.sub_title}>SERIES INFORMATION:</p>
                                <p>{this.props.selectedFan.detail}</p>


                              </div>
                            </Panel>
                            <Panel name="Product Documentation">
                              <div className={styles.fan_div}>
                                <p className={styles.title}>Product Documentation</p>
                                <img className={styles.documentation_image} src={documentation}></img>

                              </div>
                            </Panel>
                            <Panel name="Product Contact">
                              <div className={styles.fan_div}>
                                <div >
                                  <p className={styles.title}>Contact</p>
                                  <p className={styles.sub_title}>SALES REPRESENTATIVE:</p>
                                  <p>Name: {this.props.selectedFan.contact_s_name}</p>
                                  <p>Phone: {this.props.selectedFan.contact_s_phone}</p>
                                  <p>Email: {this.props.selectedFan.contact_s_email}</p>
                                  <p>Web: {this.props.selectedFan.contact_s_web}</p>
                                </div>
                                <div >
                                  <p className={styles.sub_title}>MANUFACTURER:</p>
                                  <p>Department: {this.props.selectedFan.contact_m_department}</p>
                                  <p>Phone: {this.props.selectedFan.contact_m_phone}</p>
                                  <p>Email: {this.props.selectedFan.contact_m_email}</p>
                                  <p>Web: {this.props.selectedFan.contact_m_web}</p>
                                  
                                </div>

                              </div>
                            </Panel>
                          </Tabs>
                        </div>
                      )}


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


    selectedFan: state.auth.selectedFan
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomePage: token => dispatch(actions.getHomePage(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

