import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar.jsx';
import AccordionElement from './AccordionElement.jsx';
import glob from './global.jsx'
import SkillBar from 'react-skillbars';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { PieChart } from 'react-minimal-pie-chart';
import Card from 'react-bootstrap/Card'
import Sound from 'react-sound';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';



class GameSpace extends Component {
  state = {
    isGameOver: false,
    overId: -1,
    isDeptOverId: -1,
    term: this.props.location.info.term,
    startApproval: this.props.location.info.startApproval,
    minApproval : this.props.location.info.minApproval,
    minWinApproval : this.props.location.info.minWinApproval,
    mode: this.props.location.info.mode,
    curFunds: 12,
    food: 100,
    time: 1000,
    total: this.props.location.info.term,
    start: 0,
    last: 0,
    last_fund: 0,
    last_app: 0,
    health_perc: 68,
    defence_perc: 77,
    agriculture_perc: 80,
    education_perc: 71,
    last_health_perc: 68,
    last_defence_perc: 77,
    last_agriculture_perc: 80,
    last_education_perc: 71,
    sc1_time: 50,
    sc2_time: 125,
    sc3_time: 110,
    sc4_time: 280,
    sc5_time: 250,
    sc6_time: 210,
    sc7_time: 190,
    sc8_time: 150,
    sc1_flag: true,
    sc2_flag: true,
    sc3_flag: true,
    sc4_flag: true,
    sc5_flag: true,
    sc6_flag: true,
    sc7_flag: true,
    sc8_flag: true,
    approval: this.props.location.info.startApproval,
    dept : undefined,
    curDept : glob.healthId,
    timeLeft : undefined,
    showModal: false,
    ModalMessage: "",
    ModalTitle: "",
    modalBackdrop: "static",
    depts: [
        { id: glob.healthId, label: "Health Policies", info: glob.healthInfo,invst: glob.healthInvst},
        { id: glob.defenceId, label: "Defence Policies" ,info: glob.defenceInfo,invst: glob.defenceInvst },
        { id: glob.agricultureId, label: "Agriculture Policies", info: glob.agricultureInfo,invst : glob.agricultureInvst },
        { id: glob.educationId, label: "Education Policies", info: glob.educationInfo,invst: glob.educationInvst },
      ],
    healthOptions: [
      { id: glob.healthOp1, label: glob.healthOp1Label + String(glob.healthOp1Cost), cost: glob.healthOp1Cost, status: false, info: glob.healthOp1Info},
      { id: glob.healthOp2, label: glob.healthOp2Label + String(glob.healthOp2Cost), cost: glob.healthOp2Cost, status: false, info: glob.healthOp2Info},
      { id: glob.healthOp3, label: glob.healthOp3Label + String(glob.healthOp3Cost), cost: glob.healthOp3Cost, status: false, info: glob.healthOp3Info},
      { id: glob.healthOp4, label: glob.healthOp4Label + String(glob.healthOp4Cost), cost: glob.healthOp4Cost, status: false, info: glob.healthOp4Info},
      { id: glob.healthOp5, label: glob.healthOp5Label + String(glob.healthOp5Cost), cost: glob.healthOp5Cost, status: false, info: glob.healthOp5Info},
      { id: glob.healthOp6, label: glob.healthOp6Label + String(glob.healthOp6Cost), cost: glob.healthOp6Cost, status: false, info: glob.healthOp6Info},
      { id: glob.healthOp7, label: glob.healthOp7Label + String(glob.healthOp7Cost), cost: glob.healthOp7Cost, status: false, info: glob.healthOp7Info},
      { id: glob.healthOp8, label: glob.healthOp8Label + String(glob.healthOp8Cost), cost: glob.healthOp8Cost, status: false, info: glob.healthOp8Info},
    ],
    defenceOptions: [
      { id: glob.defenceOp1, label: glob.defenceOp1Label + String(glob.defenceOp1Cost), cost: glob.defenceOp1Cost, status: false, info: glob.defenceOp1Info},
      { id: glob.defenceOp2, label: glob.defenceOp2Label + String(glob.defenceOp2Cost), cost: glob.defenceOp2Cost, status: false, info: glob.defenceOp2Info},
      { id: glob.defenceOp3, label: glob.defenceOp3Label + String(glob.defenceOp3Cost), cost: glob.defenceOp3Cost, status: false, info: glob.defenceOp3Info},
      { id: glob.defenceOp4, label: glob.defenceOp4Label + String(glob.defenceOp4Cost), cost: glob.defenceOp4Cost, status: false, info: glob.defenceOp4Info},
      { id: glob.defenceOp5, label: glob.defenceOp5Label + String(glob.defenceOp5Cost), cost: glob.defenceOp5Cost, status: false, info: glob.defenceOp5Info},
      { id: glob.defenceOp6, label: glob.defenceOp6Label + String(glob.defenceOp6Cost), cost: glob.defenceOp6Cost, status: false, info: glob.defenceOp6Info},
      { id: glob.defenceOp7, label: glob.defenceOp7Label + String(glob.defenceOp7Cost), cost: glob.defenceOp7Cost, status: false, info: glob.defenceOp7Info},
      { id: glob.defenceOp8, label: glob.defenceOp8Label + String(glob.defenceOp8Cost), cost: glob.defenceOp8Cost, status: false, info: glob.defenceOp8Info},
    ],
    agricultureOptions: [
      { id: glob.agricultureOp1, label: glob.agricultureOp1Label + String(glob.agricultureOp1Cost), cost: glob.agricultureOp1Cost , status: false, info: glob.agricultureOp1Info},
      { id: glob.agricultureOp2, label: glob.agricultureOp2Label + String(glob.agricultureOp2Cost), cost: glob.agricultureOp2Cost , status: false, info: glob.agricultureOp2Info},
      { id: glob.agricultureOp3, label: glob.agricultureOp3Label + String(glob.agricultureOp3Cost), cost: glob.agricultureOp3Cost , status: false, info: glob.agricultureOp3Info},
      { id: glob.agricultureOp4, label: glob.agricultureOp4Label + String(glob.agricultureOp4Cost), cost: glob.agricultureOp4Cost , status: false, info: glob.agricultureOp4Info},
      { id: glob.agricultureOp5, label: glob.agricultureOp5Label + String(glob.agricultureOp5Cost), cost: glob.agricultureOp5Cost , status: false, info: glob.agricultureOp5Info},
      { id: glob.agricultureOp6, label: glob.agricultureOp6Label + String(glob.agricultureOp6Cost), cost: glob.agricultureOp6Cost , status: false, info: glob.agricultureOp6Info},
      { id: glob.agricultureOp7, label: glob.agricultureOp7Label + String(glob.agricultureOp7Cost), cost: glob.agricultureOp7Cost , status: false, info: glob.agricultureOp7Info},
      { id: glob.agricultureOp8, label: glob.agricultureOp8Label + String(glob.agricultureOp8Cost), cost: glob.agricultureOp8Cost , status: false, info: glob.agricultureOp8Info},
    ],
    educationOptions: [
      { id: glob.educationOp1, label: glob.educationOp1Label + String(glob.educationOp1Cost), cost: glob.educationOp1Cost, status: false, info: glob.educationOp1Info},
      { id: glob.educationOp2, label: glob.educationOp2Label + String(glob.educationOp2Cost), cost: glob.educationOp2Cost, status: false, info: glob.educationOp2Info},
      { id: glob.educationOp3, label: glob.educationOp3Label + String(glob.educationOp3Cost), cost: glob.educationOp3Cost, status: false, info: glob.educationOp3Info},
      { id: glob.educationOp4, label: glob.educationOp4Label + String(glob.educationOp4Cost), cost: glob.educationOp4Cost, status: false, info: glob.educationOp4Info},
      { id: glob.educationOp5, label: glob.educationOp5Label + String(glob.educationOp5Cost), cost: glob.educationOp5Cost, status: false, info: glob.educationOp5Info},
      { id: glob.educationOp6, label: glob.educationOp6Label + String(glob.educationOp6Cost), cost: glob.educationOp6Cost, status: false, info: glob.educationOp6Info},
      { id: glob.educationOp7, label: glob.educationOp7Label + String(glob.educationOp7Cost), cost: glob.educationOp7Cost, status: false, info: glob.educationOp7Info},
      { id: glob.educationOp8, label: glob.educationOp8Label + String(glob.educationOp8Cost), cost: glob.educationOp8Cost, status: false, info: glob.educationOp8Info},
    ],
  }


  getOptions = (id) => {
    switch(id)
    {
      case glob.healthId : return this.state.healthOptions;
      case glob.educationId : return this.state.educationOptions;
      case glob.agricultureId : return this.state.agricultureOptions;
      case glob.defenceId : return this.state.defenceOptions;
      default: break;
    }
  }
  getDeptName = (id) => {
    switch(id)
    {
      case glob.healthId : return 'Health';
      case glob.educationId : return 'Education';
      case glob.agricultureId : return 'Agriculture';
      case glob.defenceId : return 'Defence';
      default: break;
    }
  }

  handleCloseModal = () => {
      this.setState({ showModal: false });
    }

    setModalValues = (title, message, b) => {
      this.setState({ showModal: true, ModalMessage: message, ModalTitle:title, modalBackdrop: b })
    }

  increaseHealth = (x) => {
    let y = x
    if (y < 0)
    {
      y = 0.6*x
    }
    y = this.state.health_perc + y*0.9
    if (y > 100)
    {
      y = 100
    }
    this.setState({
      time: this.state.time,
      health_perc: Number(y),
    })
  }

  increaseDef = (x) => {
    let y = x
    if (y < 0)
    {
      y = 0.6*x
    }
    y = this.state.defence_perc + y*1.1
    if (y > 100)
    {
      y = 100
    }
    this.setState({
      defence_perc: Number(y),
    })
  }

  increaseAgri = (x) => {
    let y = x
    if (y < 0)
    {
      y = 0.6*x
    }
    if (y > 100)
    {
      y = 100
    }
    y = this.state.agriculture_perc + y*1.1
    this.setState({
      agriculture_perc: Number(y),
    })
  }

  increaseEdu = (x) => {
    let y = x
    if (y < 0)
    {
      y = 0.6*x
    }
    if (y > 100)
    {
      y = 100
    }
    y = this.state.education_perc + y*1.2
    this.setState({
      education_perc: Number(y),
    })
  }

  changeButtonStatus = (element) => {
    console.log(element.id, element.status)
    let curFunds = this.state.curFunds

    let options1 = this.state.defenceOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost*0.6
          glob.defenceInvst = glob.defenceInvst - c.cost
          this.increaseDef(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            this.setModalValues("Insufficient Funds", "You don't have enough funds right now to implement this policy","dynamic")
            c.status = !c.status
          }
          else
          {
          curFunds = curFunds - c.cost
          glob.defenceInvst = glob.defenceInvst + c.cost
          this.increaseDef(c.cost)
          }
        }
        c.status = !c.status

        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options2 = this.state.healthOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost*0.6
          glob.healthInvst = glob.healthInvst - c.cost
          this.increaseHealth(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            this.setModalValues("Insufficient Funds", "You don't have enough funds right now to implement this policy","dynamic")
            c.status = !c.status
          }
          else{
          curFunds = curFunds - c.cost
          glob.healthInvst = glob.healthInvst + c.cost
          this.increaseHealth(c.cost)
          }
        }

        // alert(glob.healthInvst)
        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    let options3 = this.state.agricultureOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost*0.6
          glob.agricultureInvst = glob.agricultureInvst - c.cost
          this.increaseAgri(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            this.setModalValues("Insufficient Funds", "You don't have enough funds right now to implement this policy","dynamic")
            c.status = !c.status
          }
          else{
          curFunds = curFunds - c.cost
          glob.agricultureInvst = glob.agricultureInvst + c.cost
          this.increaseAgri(c.cost)
          }
        }

        c.status = !c.status
        // console.log(curFunds, c.cost)
      }

      return c;
    });

    let options4 = this.state.educationOptions.map(c => {
      if(element !== undefined && c.id === element.id)
      {
        if(c.status)
        {
          curFunds = curFunds + c.cost*0.6
          glob.educationInvst = glob.educationInvst - c.cost
          this.increaseEdu(-1*c.cost)
        }
        else
        {
          if (this.state.curFunds < c.cost)
          {
            this.setModalValues("Insufficient Funds", "You don't have enough funds right now to implement this policy","dynamic")
            c.status = !c.status
          }
          else
          {
          curFunds = curFunds - c.cost
          glob.educationInvst = glob.educationInvst + c.cost
          this.increaseEdu(c.cost)
          }
        }

        c.status = !c.status
        // console.log(curFunds, c.cost)
      }
      return c;
    });

    this.setState({ options1, options2, options3, options4, curFunds });
    // alert("set")
  }

  constructor(props) {
    super(props)
  }

  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now(),
    })
    this.timer = setInterval(() => this.setState({
      time: (this.state.total*1000 + this.state.start - Date.now() )/1000
    }), 1);
  }

  updatePerc = () => {

    let health_rate = 2.4*(100 - this.state.health_perc)*0.65/100 + 0.1
    let defence_rate = 2.2*(100 - this.state.defence_perc)*0.5/100 + 0.1
    let education_rate = 2.1*(100 - this.state.education_perc)*0.25/100 + 0.1
    let agriculture_rate = 2.2*(100 - this.state.agriculture_perc)*0.45/100 + 0.1

    if (this.state.health_perc > 65 && this.state.time > 30)
    {
      health_rate = health_rate / 5
    }
    else if (this.state.health_perc > 45 && this.state.time > 30)
    {
      health_rate = health_rate / 4
    }

    if (this.state.defence_perc > 72 && this.state.time > 50)
    {
      defence_rate = defence_rate / 2.7
    }
    else if (this.state.defence_perc > 30 && this.state.time > 50)
    {
      defence_rate = defence_rate / 2.3
    }

    if (this.state.agriculture_perc > 75 && this.state.time > 50)
    {
      agriculture_rate = agriculture_rate / 2.1
    }

    if (this.state.agriculture_perc > 46 && this.state.time > 100)
    {
      agriculture_rate = agriculture_rate / 1.7
    }

    if (this.state.education_perc > 60)
    {
      education_rate = education_rate / 1.45
    }
    else if (this.state.education_perc > 45)
    {
      education_rate = education_rate / 1.3
    }

    if (isNaN(health_rate))
    {
      console.log(this.state.health_perc)
    }

    this.setState({
      health_perc: Number((this.state.health_perc - health_rate).toFixed(1)),
      defence_perc: Number((this.state.defence_perc - defence_rate).toFixed(1)),
      education_perc: Number((this.state.education_perc - education_rate).toFixed(1)),
      agriculture_perc: Number((this.state.agriculture_perc - agriculture_rate).toFixed(1)),
      last: this.state.total - this.state.time,
    })

  }

  updateFund = () => {

    let added_fund = 0.08 * this.state.approval + 4
    added_fund = added_fund > 10 ? 10 : added_fund
    added_fund = Number(added_fund.toFixed(1))
    this.setState({
      last_fund: this.state.total - this.state.time,
      curFunds: Number((this.state.curFunds + added_fund).toFixed(2)),
    })
  }

  updateVoter = () => {

    let health_change = this.state.health_perc - this.state.last_health_perc
    let def_change = this.state.defence_perc - this.state.last_defence_perc
    let agri_change = this.state.agriculture_perc - this.state.last_agriculture_perc
    let edu_change = this.state.education_perc - this.state.last_education_perc
    let app_change = (0.6*health_change + 0.4*def_change + 0.2*agri_change + 0.1*edu_change)/1.4


    // alert(edu_change)
    this.setState({
      last_app: this.state.total - this.state.time,
      approval: Number((this.state.approval + app_change).toFixed(2)),
      last_agriculture_perc: this.state.agriculture_perc,
      last_defence_perc: this.state.defence_perc,
      last_health_perc: this.state.health_perc,
      last_education_perc: this.state.education_perc,
    })
  }

  maxApp = () => {
    this.setState({
      approval: 100,
    })
  }

  minFunds = () => {
    this.setState({
      curFunds: 0,
    })
  }

  scenarios = () => {
    let sc1_flag = this.state.sc1_flag
    let sc2_flag = this.state.sc2_flag
    let sc3_flag = this.state.sc3_flag
    let sc4_flag = this.state.sc4_flag
    let sc5_flag = this.state.sc5_flag
    let sc6_flag = this.state.sc6_flag
    let sc7_flag = this.state.sc7_flag
    let sc8_flag = this.state.sc8_flag

    let sc1_time = this.state.sc1_time
    let sc2_time = this.state.sc2_time
    let sc3_time = this.state.sc3_time
    let sc4_time = this.state.sc4_time
    let sc5_time = this.state.sc5_time
    let sc6_time = this.state.sc6_time
    let sc7_time = this.state.sc7_time
    let sc8_time = this.state.sc8_time

    let x = Math.random()
    if (x > 0.5)
    {
      sc1_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc2_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc3_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc4_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc5_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc6_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc7_flag = false
    }

    x = Math.random()
    if (x > 0.5)
    {
      sc8_flag = false
    }

    // alert(this.state.time)
    this.setState({
      sc1_flag: sc1_flag,
      sc2_flag: sc2_flag,
      sc3_flag: sc3_flag,
      sc4_flag: sc4_flag,
      sc5_flag: sc5_flag,
      sc6_flag: sc6_flag,
      sc7_flag: sc7_flag,
      sc8_flag: sc8_flag,
      sc1_time: sc1_time,
      sc2_time: sc2_time,
      sc3_time: sc3_time,
      sc4_time: sc4_time,
      sc5_time: sc5_time,
      sc6_time: sc6_time,
      sc7_time: sc7_time,
      sc8_time: sc8_time,
    })
  }

  handleSelectDept = (key) => (event, isExpanded) => {

    if (isExpanded === undefined || isExpanded === true) {
      this.setState({ curDept: key })}
  }

  handleGameOver = (over, id) => {
    let t =  Math.ceil(this.state.time) /2
    this.setState({ isGameOver: true, isDeptOverId: id, overId: over, timeLeft: t })
  }

  scene1 = () => {
    this.setModalValues("BAD NEWS!", "The implementation of health policies has been riddled with corruption and has reduced the performance of the health department by 5%", "static")
    this.setState({
      sc1_flag: true,
      health_perc: this.state.health_perc - 5,
    })
  }

  scene2 = () => {
    this.setModalValues("GOOD NEWS!", "UN has declared you the best prime minister in the world and hence has awarded monetary funds worth 9 trillion rupees","static")
    this.setState({
      sc2_flag: true,
      curFunds: this.state.curFunds + 9
    })
  }

  scene3 = () => {
    this.setModalValues("BAD NEWS!", "Locusts have destroyed many crops in the northern states. This has negatively affected the functioning of the agriculture department by 3%","static")
    this.setState({
      sc3_flag: true,
      agriculture_perc: this.state.agriculture_perc - 3
    })
  }

  scene4 = () => {
    this.setModalValues("GOOD NEWS!", "Better equipment and storage facilities have been built. This has boosted agriculture department performance by 4%","static")
    this.setState({
      sc4_flag: true,
      agriculture_perc: this.state.agriculture_perc + 4
    })
  }

  scene5 = () => {
    this.setModalValues("BAD NEWS!", "A top politician was caught embezzeling funds from the defence department. This has reduced the performance of the defence department by 4%","static")
    this.setState({
      sc5_flag: true,
      defence_perc: this.state.defence_perc - 4
    })
  }

  scene6 = () => {
    this.setModalValues("GOOD NEWS!", "The committee overseeing implementation of the policies of the defence department has adopted new lean and streamlined methodologies. This has boosted the performance of the defence department by 3%","static")
    this.setState({
      sc6_flag: true,
      defence_perc: this.state.defence_perc + 3
    })
  }

  scene7 = () => {
    this.setModalValues("GOOD NEWS!", "Agriculture exports have been very profitable this year. You get 6 trillion rupees as extra funds","static")
    this.setState({
      sc7_flag: true,
      curFunds: this.state.curFunds + 6
    })
  }

  scene8 = () => {
    this.setModalValues("BAD NEWS!", "A wave of flat earthers and anti-vaccinists have taken over the running of the education department, impacting it's functioning negatively by 6%","static")
    this.setState({
      sc8_flag: true,
      education_perc: this.state.education_perc - 6
    })
  }

  componentDidMount() {
    if(!this.state.isGameOver)
    {
      this.setState({
        total: this.state.term,
        approval: this.state.startApproval,
      })
      this.scenarios()
      this.startTimer()
    }
 }
    render() {
      // console.log(this.state.term, this.state.startApproval, this.state.minApproval, this.state.mode)
      // alert(this.state.curfunds)
      // alert(this.state.time)

      let skills_health = undefined
      let skills_defense = undefined
      let skills_agr = undefined
      let skills_edu = undefined

      if(!this.state.isGameOver)
      {
        if ((this.state.total - this.state.time) - this.state.last > 1 && (this.state.total - this.state.time) > 5)
        {
          this.updatePerc()
        }

        if ((this.state.total - this.state.time) - this.state.last_fund > 20 && (this.state.total - this.state.time) > 5)
        {
          this.updateFund()
        }

        if ((this.state.total - this.state.time) - this.state.last_app > 1 && (this.state.total - this.state.time) > 5)
        {
          this.updateVoter()
        }

        if (this.state.approval > 100)
        {
          this.maxApp()
        }

        if (this.state.curFunds < 0)
        {
          this.minFunds()
        }

        if (this.state.sc1_flag == false && this.state.time > this.state.sc1_time - 2 && this.state.time < this.state.sc1_time + 2){
          this.scene1()
        }

        if (this.state.sc2_flag == false && this.state.time > this.state.sc2_time - 1 && this.state.time < this.state.sc2_time + 1){
          this.scene2()
        }

        if (this.state.sc3_flag == false && this.state.time > this.state.sc3_time - 1 && this.state.time < this.state.sc3_time + 1){
          this.scene3()
        }

        if (this.state.sc4_flag == false && this.state.time > this.state.sc4_time - 1 && this.state.time < this.state.sc4_time + 1){
          this.scene4()
        }

        if ((this.state.sc5_flag == false) && this.state.time > this.state.sc5_time - 1 && this.state.time < this.state.sc5_time + 1){
          this.scene5()
        }

        if ((this.state.sc6_flag == false) && this.state.time > this.state.sc6_time - 1 && this.state.time < this.state.sc6_time + 1){
          this.scene6()
        }

        if ((this.state.sc7_flag == false) && this.state.time > this.state.sc7_time - 1 && this.state.time < this.state.sc7_time + 1){
          this.scene7()
        }

        if (this.state.sc8_flag == false && this.state.time > this.state.sc8_time - 1 && this.state.time < this.state.sc8_time + 1){
          this.scene8()
        }

        skills_health = [
          {type: "Health", level: this.state.health_perc.toFixed(2), color: {bar: this.state.health_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_defense = [
          {type: "Defense", level: this.state.defence_perc.toFixed(2), color: {bar: this.state.defence_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_agr = [
          {type: "Agriculture", level: this.state.agriculture_perc.toFixed(2), color: {bar: this.state.agriculture_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];
        skills_edu = [
          {type: "Education", level: this.state.education_perc.toFixed(2), color: {bar: this.state.education_perc > 30 ? "#3498db" : "#ff1a1a", title: { background: 'grey', text: 'white' } }},
        ];

        if (this.state.time < 0 )
        {
          this.handleGameOver(glob.timeOver, -1)
        }
        if (this.state.approval < this.state.minApproval )
        {
          this.handleGameOver(glob.approvalOver, -1)
        }
        if(this.state.health_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.healthId)
        }
        if( this.state.defence_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.defenceId)
        }
        if(this.state.education_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver, glob.educationId)
        }
        if(this.state.agriculture_perc <= 0 )
        {
          this.handleGameOver(glob.deptOver,glob.agricultureId)
        }
      }

      let Playing = undefined
      let DaysLeft = undefined
      let overRender = undefined

      if (!this.state.isGameOver)
      {
        Playing = <div className="gamespace">
        <Sound
        url="./song.mp3"
        playStatus={Sound.status.PLAYING}
        playbackRate= {1}
        autoLoad = {true}
        loop = {true}
        volume = {70}
        onLoad={() => console.log('Loaded')}
        onPlaying={({ position }) => console.log('Position', position)}
        />

        <NavBar />

        <Container fluid style={{ paddingLeft: 15, paddingRight: 25}}>
        <Row noGutters className="justify-content-md-center "  style={{top: '20rem'}}>

        <Col xs={{ span: 4, offset: 1 }} md={{ span: 3, offset: 0 }} style={{ paddingTop: 100}}>
        <SkillBar skills={skills_health}  height={45} width={60} style={{ paddingTop: 10 }}/>
        <div style={{ paddingTop: 30 }}><SkillBar skills={skills_defense}  height={45} width={55} /></div>
        <div style={{ paddingTop: 30 }}><SkillBar skills={skills_agr}  height={45} width={55} /></div>
        <div style={{ paddingTop: 30 }}><SkillBar skills={skills_edu}  height={45} width={55} /></div>
        </Col>

        <Col xs={{ span: 7, offset: 2 }} md={{ span: 5, offset: 1 }} style={{ paddingTop: 40}}>


        <Card bg='light'

        text= 'dark'
        style={{ width: '30rem' }}
        className="mb-2">
        <Card.Header>Welcome Mr.Prime Minister!</Card.Header>
        <Card.Body>
        <Card.Title>Mid-weekly reports</Card.Title>
        <Card.Text>
        <div >
        <div> Current funding : {this.state.curFunds.toFixed(2)} trillion rupees </div>
        <div> Time left : {Math.ceil(this.state.time) /2 } weeks </div>
        <div> Min. voter approval that needs to be maintained: {this.state.minApproval}% </div>
        <div> Min. voter approval at the end of term to win: {this.state.minWinApproval}% </div>
        </div>
        </Card.Text>
        </Card.Body>
        </Card>
        <Card bg='dark'
        text= 'white'
        style={{ width: '30rem' }}
        className="mb-2">
        <Card.Header>Voter Approval: {this.state.approval.toFixed(2)} % </Card.Header>
        <Card.Body>
        <Card.Text>
        <div >
        <PieChart
        data={[
          { title: this.state.approval , value: this.state.approval , color: '#00b300' },
          { title: 100 - this.state.approval , value: 100 - this.state.approval, color: '#ff1a1a'},
        ]}
        radius= {45}
        center = {[80,45]}
        viewBoxSize = {[170, 100]}

        />
        </div>
        </Card.Text>
        </Card.Body>
        </Card>

        </Col>

        <Col xs={{ span: 2, offset: 2 }} md={{ span: 2, offset: 1 }} style={{ paddingTop: 10}}>

        {this.state.depts.map(el =>
          <AccordionElement
          id={el.id}
          label={el.label}
          info={el.info}
          curDept={this.state.curDept}
          options={this.getOptions(el.id)}
          changeButtonStatus = {this.changeButtonStatus}
          onSelectOption={this.handleSelectDept}
          />
        )}

        </Col>
        </Row>
        </Container>

        <Modal show={this.state.showModal} onHide={this.handleCloseModal} backdrop= {this.state.modalBackdrop}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.ModalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.ModalMessage}</Modal.Body>

        </Modal>
        </div>


      }
      else
      {
        if(this.state.overId == glob.timeOver && this.state.approval >= this.state.minWinApproval)
        {

          Playing = <div> <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-left align-items-center"  style={{top: '20rem'}}>
          <img src="../congo.png" alt= "edit" width="650" height="160"/>
          </Row>
          </Container>


          <Container fluid style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 60 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '80rem'}}>
          <Card bg='light'

          text= 'dark'
          style={{ width: '40rem' }}
          className="mb-2">
          <Card.Header>Congratulations!! You have enough voter approval to win the upcoming elections</Card.Header>
          <Card.Body>
          <Card.Title>End of Term Report</Card.Title>
          <Card.Text>
          <div >
          <div> Score : {2000 + 2*this.state.approval.toFixed(2) + 3*this.state.curFunds.toFixed(2)+ 1.5*(this.state.health_perc + this.state.defence_perc + this.state.agriculture_perc + this.state.education_perc).toFixed(2)}  </div>
          <div> Voter Approval : {this.state.approval.toFixed(2)} % </div>
          <div> Funds Left : {this.state.curFunds.toFixed(2)} trillion rupees  </div>
          <div> State of each department (performance): </div>
          <ul>
            <li> Health Department : {this.state.health_perc.toFixed(2)} </li>
            <li> Defence Department : {this.state.defence_perc.toFixed(2)} </li>
            <li> Agriculture Department : {this.state.agriculture_perc.toFixed(2)} </li>
            <li> Education Department : {this.state.education_perc.toFixed(2)} </li>
          </ul>
          </div>
          </Card.Text>
          </Card.Body>
          </Card>
          </Row>
          </Container>


          <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '20rem'}}>
          <Link to = {{ pathname: "/" }} >
          <button type="button" className="btn btn-light btn-lg btn-block">
            Play Again
          </button>
          </Link>

          </Row>
          </Container>
          </div>
        }
        else
        {
          if(this.state.overId == glob.timeOver)
          {
            overRender = 'You do not have enough voter approval to win the next election';
          }
          else if(this.state.overId == glob.approvalOver)
          {
            overRender = 'YOU HAVE BEEN IMPEACHED!!!! You do not have enough voter approval to complete your term' ;
            DaysLeft = <li>Weeks Left:   {this.state.timeLeft} weeks </li>
          }
          else if(this.state.overId == glob.deptOver)
          {
            overRender = "YOU HAVE BEEN IMPEACHED!!!!  The state of the " + this.getDeptName(this.state.isDeptOverId) + " Department is pitiable. It has run out of funds and there's chaos everywhere.";
            DaysLeft = <li>Weeks Left:   {this.state.timeLeft} weeks </li>
          }






          Playing = <div> <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-left align-items-center"  style={{top: '20rem'}}>
          <img src="../gameover.png" alt= "edit" width="650" height="160"/>
          </Row>
          </Container>


          <Container fluid style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 60 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '80rem'}}>
          <Card bg='light'

          text= 'dark'
          style={{ width: '40rem' }}
          className="mb-2">
          <Card.Header> {overRender} </Card.Header>
          <Card.Body>
          <Card.Title>End of Term Report</Card.Title>
          <Card.Text>
          <div >
          <div> Score : {(this.state.term - this.state.timeLeft + 2*this.state.approval + 3*this.state.curFunds.toFixed(2)+ 1.5*(this.state.health_perc + this.state.defence_perc + this.state.agriculture_perc + this.state.education_perc)).toFixed(2)}  </div>
          <div> Voter Approval : {this.state.approval.toFixed(2)} % </div>
          <div> Funds Left : {this.state.curFunds.toFixed(2)} trillion rupees  </div>
          <div> State of each department (performance): </div>
          <ul>
            <li> Health Department : {this.state.health_perc.toFixed(2)} </li>
            <li> Defence Department : {this.state.defence_perc.toFixed(2)} </li>
            <li> Agriculture Department : {this.state.agriculture_perc.toFixed(2)} </li>
            <li> Education Department : {this.state.education_perc.toFixed(2)} </li>
            {DaysLeft}
          </ul>
          </div>
          </Card.Text>
          </Card.Body>
          </Card>
          </Row>
          </Container>


          <Container fluid style={{ paddingLeft: 15, paddingRight: 15 }}>
          <Row noGutters className="justify-content-md-center align-items-center"  style={{top: '20rem'}}>
          <Link to = {{ pathname: "/" }} >
          <button type="button" className="btn btn-light btn-lg btn-block">
            Play Again
          </button>
          </Link>

          </Row>
          </Container>
          </div>
        }

      }


      return (
          <React.Fragment>
            {Playing}
          </React.Fragment>
        );
    }
}

export default GameSpace;
