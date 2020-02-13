import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/userInfo';
import Header from '../components/Header';

import styles from './product.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Product extends Component {

  displayHomePage = () => {
    this.props.getHomePage(localStorage.getItem("token"));
  }


  constructor(props) {
    super(props)
    this.state = {
      invisible_1: true,
      invisible_2: true,
      invisible_3: true,

      use_type: "Commercial",
      application: "Indoor",
      mounting_location: "Roof",
      accessories: "With light",
      model_year_min: "0",
      model_year_max: "2020"


    }
  }

  visible_1 = function () {
    this.setState({ invisible_1: !this.state.invisible_1 });
  }

  visible_2 = function () {
    this.setState({ invisible_2: !this.state.invisible_2 });
  }

  visible_3 = function () {
    this.setState({ invisible_3: !this.state.invisible_3 });
  }

  onChange_useType = event =>{
    this.setState({ use_type: event.target.value });
  }

  onChange_application = event =>{
    this.setState({ application: event.target.value});
  }

  onChange_mountingLocation = event =>{
    this.setState({ mounting_location: event.target.value});
  }

  onChange_accessories = event =>{
    // this.setState({ accessories: event.target.value }
    // , ()=>{console.log(this.state);}
    // );

    this.setState({ accessories: event.target.value});
  }

  onChange_model_year_min = event =>{
    this.setState({ model_year_min: event.target.value});
  }

  onChange_model_year_max = event =>{
    this.setState({ model_year_max: event.target.value}
      , ()=>{console.log(this.state);}
    );
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div>
          <Container className={styles.containers}>
            <Row className={styles.row_t}>
              <Col
                className={styles.col_left}
                xs={3}>
                <Container className={styles.container_left}>
                  <Row className={styles.row1_l}>
                    <Col>
                      <h6 className={styles.text}>Search:</h6>
                    </Col>
                    <Col>
                      <button className={styles.button}>Save</button>
                    </Col>
                    <Col>
                      <button className={styles.button}>Clear</button>
                    </Col>
                  </Row>
                  <Row className={styles.row2_l}>
                    <Col className={styles.col_r2_l}>Product</Col>
                    <Col>Project</Col>
                  </Row>


                  {/* ===========================filter================================== */}
                  <Row className={styles.row_titile_l}
                    style={this.state.invisible_1 ? { display: "none" } : {}}
                    onClick={this.visible_1.bind(this)}>
                    <Col className={styles.dispadding} xs={11}> Product Type </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>
                  <Row className={styles.row_titile_l}
                    style={!this.state.invisible_1 ? { display: "none" } : {}}
                    onClick={this.visible_1.bind(this)} >
                    <Col className={styles.dispadding} xs={11}> Product Type </Col>
                    <Col className={styles.dispadding}> ▼ </Col>
                  </Row>

                  <Row className={styles.row_ProductType_total} style={!this.state.invisible_1 ? { display: "none" } : {}}>

                    <Container className={styles.container_ProductType}>
                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <label>Use Type: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="use_type_now" value="Commercial" onChange={this.onChange_useType} />
                          <label className={styles.label}>Commercial</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="use_type_now" value="Industrial" onChange={this.onChange_useType} />
                          <label className={styles.label}>Industrial</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="use_type_now" value="Residential" onChange={this.onChange_useType} />
                          <label className={styles.label}>Residential</label>
                        </Col>
                      </Row>

                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <label>Application: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="application_now" value="Indoor" onChange={this.onChange_application} />
                          <label className={styles.label}>Indoor</label>
                        </Col>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="application_now" value="Outdoor" onChange={this.onChange_application} />
                          <label className={styles.label}>Outdoor</label>
                        </Col>
                      </Row>

                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <label>Mounting Location: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="mounting_location_now" value="Roof" onChange={this.onChange_mountingLocation} />
                          <label className={styles.label}>Roof</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="mounting_location_now" value="Wall" onChange={this.onChange_mountingLocation} />
                          <label className={styles.label}>Wall</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="mounting_location_now" value="Free standing" onChange={this.onChange_mountingLocation} />
                          <label className={styles.label}>Free standing</label>
                        </Col>
                      </Row>

                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding}>
                          <label>Accessories: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="accessories_now" value="With light" onChange={this.onChange_accessories} />
                          <label className={styles.label}>With light</label>
                        </Col>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="accessories_now" value="Without light" onChange={this.onChange_accessories} />
                          <label className={styles.label}>Without light</label>
                        </Col>
                      </Row>

                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding} xs={4}>
                          <label>Model year: </label>
                        </Col>
                        
                        <Col className={styles.dispadding} xs={8}>
                          <input 
                            className={styles.input_model_year}
                            type="number" 
                            id="model_year_min" 
                            name="model_year_min" 
                            step="10"
                            placeholder="0" 
                            // value="0" 
                            onChange={this.onChange_model_year_min}/>
                          <label className={styles.label}> ── </label>
                          <input 
                            className={styles.input_model_year}
                            type="number" 
                            id="model_year_max" 
                            name="model_year_max" 
                            step="10" 
                            placeholder="2020"
                            // value="2020" 
                            onChange={this.onChange_model_year_max}/>
                        </Col>
                      </Row>
                    </Container>



                  </Row>

                  <Row className={styles.row_titile_l}
                    style={this.state.invisible_2 ? { display: "none" } : {}}
                    onClick={this.visible_2.bind(this)}>
                    <Col className={styles.dispadding} xs={11}> Technical Specifications </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>
                  <Row className={styles.row_titile_l}
                    style={!this.state.invisible_2 ? { display: "none" } : {}}
                    onClick={this.visible_2.bind(this)} >
                    <Col className={styles.dispadding} xs={11}> Technical Specifications </Col>
                    <Col className={styles.dispadding}> ▼ </Col>
                  </Row>
                  <Row className={styles.row2_l} style={!this.state.invisible_2 ? { display: "none" } : {}}>
                    Technical Specifications

                  </Row>


                  <Row className={styles.row_titile_l} >
                    <Col className={styles.dispadding} xs={11}> Brand </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>


                  <Row className={styles.row_titile_l}
                    style={this.state.invisible_3 ? { display: "none" } : {}}
                    onClick={this.visible_3.bind(this)}>
                    <Col className={styles.dispadding} xs={11}> Past Selections </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>
                  <Row className={styles.row_titile_l}
                    style={!this.state.invisible_3 ? { display: "none" } : {}}
                    onClick={this.visible_3.bind(this)} >
                    <Col className={styles.dispadding} xs={11}> Past Selections </Col>
                    <Col className={styles.dispadding}> ▼ </Col>
                  </Row>
                  <Row className={styles.row2_l} style={!this.state.invisible_3 ? { display: "none" } : {}}>
                    Technical Specifications

                  </Row>


                  <Row className={styles.row_titile_l} >
                    <Col className={styles.dispadding} xs={11}> Certifications </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>
                  {/* ===========================filter================================== */}

                </Container>
              </Col>
              <Col
                className={styles.col_right}
                xs={9}>

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

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHomePage: token => dispatch(actions.getHomePage(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);