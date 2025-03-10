import React, { Component } from "react";
import { Label, Col, Row } from "reactstrap";
import Sidenav from "../SideNav";
import Subjects from "./Subjects";

class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1"
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    function RenderComponent({ selectedOption }) {
      if (selectedOption === "option1") {
        return <Subjects />;
      } 
    }

    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2 id="addsub"> Add Subjects</h2>
              <div className="radio choice mt-5">
                <Label>
                  <input
                    type="radio"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                  />
                  Add Theory Subject
                </Label>
              </div>
              
              <RenderComponent selectedOption={this.state.selectedOption} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subject;
