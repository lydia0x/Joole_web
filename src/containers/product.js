import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import Header from '../components/Header';


import styles from './product.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import comparator from './comparator';




class Product extends Component {


  // displayHomePage = () => {
  //   this.props.getHomePage(localStorage.getItem("token"));
  // }


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
      model_year_max: "2020",

      airflow: [2000, 10000],
      power_max: [9.84, 96.52],
      sound_at_max_speed: [20, 80],
      fan_sweep_diameter: [18, 96],
      height_max: [10, 100],


      firm: [0, 10],
      global: [0, 1492],


      fans: null,
      comparatorArr:null
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.fans && nextProps.fans) {
      var arr = [];
      for(var i=0; i<nextProps.fans.length; i++){
        arr.push('0');
      }
      console.log(arr);

      return { fans: nextProps.fans,  comparatorArr: arr}
    }

    return prevState;
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

  onChange_useType = event => {
    this.setState({ use_type: event.target.value });
  }

  onChange_application = event => {
    this.setState({ application: event.target.value });
  }

  onChange_mountingLocation = event => {
    this.setState({ mounting_location: event.target.value });
  }

  onChange_accessories = event => {
    this.setState({ accessories: event.target.value });
  }

  onChange_model_year_min = event => {
    this.setState({ model_year_min: event.target.value });
  }

  onChange_model_year_max = event => {
    this.setState({ model_year_max: event.target.value }
      // , () => { console.log(this.state); }
    );
  }




  handleChange_airflow = (event, newValue) => {
    this.setState({ airflow: newValue });
  }

  onChange_airflow_min = event => {
    this.setState({ airflow: [event.target.value, this.state.airflow[1]] }

    );
  }

  onChange_airflow_max = event => {
    this.setState({ airflow: [this.state.airflow[0], event.target.value] }

    );
  }

  handleChange_power_max = (event, newValue) => {
    this.setState({ power_max: newValue });
  }

  onChange_power_max_min = event => {
    this.setState({ power_max: [event.target.value, this.state.power_max[1]] }
      // , () => { console.log(this.state); }
    );
  }

  onChange_power_max_max = event => {
    this.setState({ power_max: [this.state.power_max[0], event.target.value] }

    );
  }

  handleChange_sound_at_max_speed = (event, newValue) => {
    this.setState({ sound_at_max_speed: newValue });
  }

  onChange_sound_at_max_speed_min = event => {
    this.setState({ sound_at_max_speed: [event.target.value, this.state.sound_at_max_speed[1]] }

    );
  }

  onChange_sound_at_max_speed_max = event => {
    this.setState({ sound_at_max_speed: [this.state.sound_at_max_speed[0], event.target.value] }

    );
  }

  handleChange_fan_sweep_diameter = (event, newValue) => {
    this.setState({ fan_sweep_diameter: newValue });
  }

  onChange_fan_sweep_diameter_min = event => {
    this.setState({ fan_sweep_diameter: [event.target.value, this.state.fan_sweep_diameter[1]] }

    );
  }

  onChange_fan_sweep_diameter_max = event => {
    this.setState({ fan_sweep_diameter: [this.state.fan_sweep_diameter[0], event.target.value] }

    );
  }

  handleChange_height_max = (event, newValue) => {
    this.setState({ height_max: newValue });
  }

  onChange_height_max_min = event => {
    this.setState({ height_max: [event.target.value, this.state.height_max[1]] }

    );
  }

  onChange_height_max_max = event => {
    this.setState({ height_max: [this.state.height_max[0], event.target.value] }

    );
  }





  handleChange_firm = (event, newValue) => {
    this.setState({ firm: newValue });
  }

  onChange_firm_min = event => {
    this.setState({ firm: [event.target.value, this.state.firm[1]] }

    );
  }

  onChange_firm_max = event => {
    this.setState({ firm: [this.state.firm[0], event.target.value] }
    );
  }

  handleChange_global = (event, newValue) => {
    this.setState({ global: newValue });
  }

  onChange_global_min = event => {
    this.setState({ global: [event.target.value, this.state.global[1]] }
    );
  }

  onChange_global_max = event => {
    this.setState({ global: [this.state.global[0], event.target.value] }
      // , () => { console.log(this.state); }
    );
  }



  componentDidMount() {
    this.props.getAllFans();

  }

  // setFansInfo = () => {
  //   this.props.getAllFans();
  //   console.log(this.props.fans[0]);
  // }

  filteFanData = () => {
    const arrFans = this.props.fans.filter(fan => (
      fan.use_type === this.state.use_type
      && fan.application === this.state.application
      && fan.mounting_location === this.state.mounting_location
      && fan.accessories === this.state.accessories
      && fan.model_year <= this.state.model_year_max
      && fan.model_year >= this.state.model_year_min
      && fan.airflow <= this.state.airflow[1]
      && fan.airflow >= this.state.airflow[0]
      && fan.power_max <= this.state.power_max[1]
      && fan.power_max >= this.state.power_max[0]
      && fan.sound_at_max_speed <= this.state.sound_at_max_speed[1]
      && fan.sound_at_max_speed >= this.state.sound_at_max_speed[0]
      && fan.fan_sweep_diameter <= this.state.fan_sweep_diameter[1]
      && fan.fan_sweep_diameter >= this.state.fan_sweep_diameter[0]
      && fan.height_max <= this.state.height_max[1]
      && fan.height_max >= this.state.height_max[0]
      && fan.firm <= this.state.firm[1]
      && fan.firm >= this.state.firm[0]
      && fan.global <= this.state.global[1]
      && fan.global >= this.state.global[0]

    ));
    this.setState({ fans: arrFans });

  }

  allFanData = () => {
    this.setState({ fans: this.props.fans,
      use_type: "Commercial",
      application: "Indoor",
      mounting_location: "Roof",
      accessories: "With light",
      model_year_min: "0",
      model_year_max: "2020",

      airflow: [2000, 10000],
      power_max: [9.84, 96.52],
      sound_at_max_speed: [20, 80],
      fan_sweep_diameter: [18, 96],
      height_max: [10, 100],


      firm: [0, 10],
      global: [0, 1492] 

    });
  }


  handleCheck = (i) => {

    var arr = [...this.state.comparatorArr];
    if(arr[i] === '0') {
      arr[i] = '1';
    } else {
      arr[i] = '0';
    }
    // arr[i] = !this.state.comparatorArr[i];
    console.log(arr);
    this.setState({ comparatorArr: arr });
  }

  goToComparePage = () => {
    var fanArr = [];
    for(var i=0; i<this.state.comparatorArr.length; i++) {
      if(this.state.comparatorArr[i] === "1") {
        fanArr.push(this.props.fans[i]);
      }
    }

    console.log(fanArr);
    this.props.setFansArr(fanArr);
    
    this.props.history.push('/comparator');
    
  }

  goToDetailPage = (i) => {
    
    this.props.setSelectedFan(this.state.fans[i]);
    
    this.props.history.push('/detail');
    
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
                      <button className={styles.button} onClick={this.filteFanData}>Save</button>
                    </Col>
                    <Col>
                      <button className={styles.button} onClick={this.allFanData}>Clear</button>
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
                          <input type="radio" name="use_type_now" value="Commercial" checked={this.state.use_type === "Commercial"} onChange={this.onChange_useType} />
                          <label className={styles.label}>Commercial</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="use_type_now" value="Industrial" checked={this.state.use_type === "Industrial"} onChange={this.onChange_useType} />
                          <label className={styles.label}>Industrial</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="use_type_now" value="Residential" checked={this.state.use_type === "Residential"} onChange={this.onChange_useType} />
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
                          <input type="radio" name="application_now" value="Indoor" checked={this.state.application === "Indoor"} onChange={this.onChange_application} />
                          <label className={styles.label}>Indoor</label>
                        </Col>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="application_now" value="Outdoor" checked={this.state.application === "Outdoor"} onChange={this.onChange_application} />
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
                          <input type="radio" name="mounting_location_now" value="Roof" checked={this.state.mounting_location === "Roof"} onChange={this.onChange_mountingLocation} />
                          <label className={styles.label}>Roof</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="mounting_location_now" value="Wall" checked={this.state.mounting_location === "Wall"} onChange={this.onChange_mountingLocation} />
                          <label className={styles.label}>Wall</label>
                        </Col>
                        <Col className={styles.dispadding}>
                          <input type="radio" name="mounting_location_now" value="Free standing" checked={this.state.mounting_location === "Free standing"} onChange={this.onChange_mountingLocation} />
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
                          <input type="radio" name="accessories_now" value="With light" checked={this.state.accessories === "With light"} onChange={this.onChange_accessories} />
                          <label className={styles.label}>With light</label>
                        </Col>
                        <Col className={styles.dispadding} xs={4}>
                          <input type="radio" name="accessories_now" value="Without light" checked={this.state.accessories === "Without light"} onChange={this.onChange_accessories} />
                          <label className={styles.label}>Without light</label>
                        </Col>
                      </Row>

                      <Row className={styles.row_ProductType}>
                        <Col className={styles.dispadding} xs={4}>
                          <label className={styles.label_model_year} >Model year: </label>
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
                            onChange={this.onChange_model_year_min} />
                          <label className={styles.label_model_year}> ── </label>
                          <input
                            className={styles.input_model_year}
                            type="number"
                            id="model_year_max"
                            name="model_year_max"
                            step="10"
                            placeholder="2020"
                            // value="2020" 
                            onChange={this.onChange_model_year_max} />
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
                  <Row className={styles.row_TechnicalSpecifications_total} style={!this.state.invisible_2 ? { display: "none" } : {}}>

                    <Container className={styles.container_PastSelections}>


                      <Row className={styles.row_TechnicalSpecifications}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>⇅ Airflow (CFM): </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_TechnicalSpecifications}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="airflow_min"
                            name="airflow_min"
                            value={this.state.airflow[0]}
                            onChange={this.onChange_airflow_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={2000}
                            max={10000}
                            value={this.state.airflow}
                            onChange={this.handleChange_airflow}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="airflow_max"
                            name="airflow_max"
                            value={this.state.airflow[1]}
                            onChange={this.onChange_airflow_max}
                          />
                        </Col>
                      </Row>

                      <Row className={styles.row_TechnicalSpecifications}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>⇅ Power Max(W): </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_TechnicalSpecifications}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="power_max_min"
                            name="power_max_min"
                            value={this.state.power_max[0]}
                            onChange={this.onChange_power_max_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={9.84}
                            max={96.52}
                            value={this.state.power_max}
                            onChange={this.handleChange_power_max}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="power_max_max"
                            name="power_max_max"
                            value={this.state.power_max[1]}
                            onChange={this.onChange_power_max_max}
                          />
                        </Col>
                      </Row>


                      <Row className={styles.row_TechnicalSpecifications}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>⇅ Sound at Max Speed(dBA): </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_TechnicalSpecifications}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="sound_at_max_speed_min"
                            name="sound_at_max_speed_min"
                            value={this.state.sound_at_max_speed[0]}
                            onChange={this.onChange_sound_at_max_speed_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={20}
                            max={80}
                            value={this.state.sound_at_max_speed}
                            onChange={this.handleChange_sound_at_max_speed}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="sound_at_max_speed_max"
                            name="sound_at_max_speed_max"
                            value={this.state.sound_at_max_speed[1]}
                            onChange={this.onChange_sound_at_max_speed_max}
                          />
                        </Col>
                      </Row>

                      <Row className={styles.row_TechnicalSpecifications}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>⇅ Fan Sweep Diameter(in): </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_TechnicalSpecifications}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="fan_sweep_diameter_min"
                            name="fan_sweep_diameter_min"
                            value={this.state.fan_sweep_diameter[0]}
                            onChange={this.onChange_fan_sweep_diameter_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={18}
                            max={96}
                            value={this.state.fan_sweep_diameter}
                            onChange={this.handleChange_fan_sweep_diameter}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="fan_sweep_diameter_max"
                            name="fan_sweep_diameter_max"
                            value={this.state.fan_sweep_diameter[1]}
                            onChange={this.onChange_fan_sweep_diameter_max}
                          />
                        </Col>
                      </Row>


                      <Row className={styles.row_TechnicalSpecifications}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>⇅ Height Max(in): </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_TechnicalSpecifications}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="height_max_min"
                            name="height_max_min"
                            value={this.state.height_max[0]}
                            onChange={this.onChange_height_max_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={10}
                            max={100}
                            value={this.state.height_max}
                            onChange={this.handleChange_height_max}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="height_max"
                            name="height_max"
                            value={this.state.height_max[1]}
                            onChange={this.onChange_height_max_max}
                          />
                        </Col>
                      </Row>


                    </Container>



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
                  <Row className={styles.row_PastSelections_total} style={!this.state.invisible_3 ? { display: "none" } : {}}>

                    <Container className={styles.container_PastSelections}>
                      <Row className={styles.row_PastSelections}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>Firm: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_PastSelections}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="firm_min"
                            name="firm_min"
                            value={this.state.firm[0]}
                            onChange={this.onChange_firm_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={0}
                            max={10}
                            value={this.state.firm}
                            onChange={this.handleChange_firm}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="firm_max"
                            name="firm_max"
                            value={this.state.firm[1]}
                            onChange={this.onChange_firm_max}
                          />
                        </Col>
                      </Row>

                      <Row className={styles.row_PastSelections}>
                        <Col className={styles.dispadding}>
                          <label className={styles.label_model_year}>Global: </label>
                        </Col>
                      </Row>
                      <Row className={styles.row_PastSelections}>

                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="global_min"
                            name="global_min"
                            value={this.state.global[0]}
                            onChange={this.onChange_global_min}
                          />
                        </Col>
                        <Col className={styles.dispadding} xs={6}>
                          <Slider className={styles.airflow}
                            min={0}
                            max={1492}
                            value={this.state.global}
                            onChange={this.handleChange_global}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"

                          />
                        </Col>
                        <Col className={styles.dispadding} xs={3}>
                          <input
                            className={styles.airflow}
                            type="number"
                            id="global_max"
                            name="global_max"
                            value={this.state.global[1]}
                            onChange={this.onChange_global_max}
                          />
                        </Col>
                      </Row>



                    </Container>



                  </Row>


                  <Row className={styles.row_titile_l} >
                    <Col className={styles.dispadding} xs={11}> Certifications </Col>
                    <Col className={styles.dispadding}> ▶ </Col>
                  </Row>

                  <Row className={styles.compare_row} >
                    <Col className={styles.dispadding} > 
                    <button className={styles.button} onClick={this.goToComparePage}>Compare Page</button>
                    </Col>
                  </Row>
                  {/* ===========================filter================================== */}

                </Container>
              </Col>
              <Col
                className={styles.col_right}
                xs={9}>

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
                      
                      {this.state.fans && this.state.fans.map((object, i) => {
                        return (
                          <div className={styles.fan_div} >
                            <div className={styles.fan_class1} onClick={this.goToDetailPage.bind(this, i)}>
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
                              <div className={styles.fan_class2}>
                                <input type="checkbox" onChange={this.handleCheck.bind(this, i)} />  
                                <label> Compare </label>
                              </div>
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

    fans: state.auth.fans
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllFans: () => dispatch(actions.getAllFans()),
    setFansArr: (fanArr) => dispatch(actions.setFansArr(fanArr)),
    setSelectedFan: (setSelectedFan) => dispatch(actions.setSelectedFan(setSelectedFan))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);