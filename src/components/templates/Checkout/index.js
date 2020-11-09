import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  NumberedHeader, OptionItem, CheckoutFooter
} from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 4rem;
`;

const Label = styled.label`
  cursor: pointer;

  input {
    opacity: 0;
    position: absolute;
  }
`;

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Type"
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    return (
      <Wrapper>
        <NumberedHeader title="What type of insurance are you looking for?" step={1}/>
        <Label>
          <input
            type="radio"
            value="Professional"
            checked={this.state.selectedOption === "Professional"}
            onChange={this.onValueChange}
          />
          <OptionItem icon="briefcase" title="Professional Liability" description="Erros & Omissions (E&O insurance)" />
        </Label>
        <Label>
          <input
            type="radio"
            value="General"
            checked={this.state.selectedOption === "General"}
            onChange={this.onValueChange}
          />
          <OptionItem icon="cloud-rain" title="General Liability" description="Help mitigate against loss (CGL insurance)" />
        </Label>
        <Label>
          <input
            type="radio"
            value="Business"
            checked={this.state.selectedOption === "Business"}
            onChange={this.onValueChange}
          />
          <OptionItem icon="package" title="Business Owner’s Policy" description="The complete package (BOP)" />
        </Label>
        <Label>
          <input
            type="radio"
            value="Cyber"
            checked={this.state.selectedOption === "Cyber"}
            onChange={this.onValueChange}
          />
          <OptionItem icon="wifi" title="Cyber" description="Internet-bsed risks (CLIC)" />
        </Label>
        <CheckoutFooter step={"1/7"}/>
      </Wrapper>
    ) 
  }
}

export default Checkout
