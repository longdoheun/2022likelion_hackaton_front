import React, { Component } from 'react';

class CreateForm extends Component {
  state = {
    questionType:['balance','discuss'],
    subject: '',
    prosTitle: '',
    prosDesc:'',
    consTitle:'',
    consDesc:'',
    tags:[],
    issue:''
    };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      questionType:'balance',
      subject: '',
      prosTitle: '',
      prosDesc:'',
      consTitle:'',
      consDesc:'',
      tags:[],
      issue: false
    })
  }
  render() {
    return (
      // <input type="radio" name="qustionType" value="balance" checked="checked"></input>
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="subject"
        />
        <textarea
          value={this.state.name}
          onChange={this.handleChange}
          name="prosTitle"
        />
        <textarea
          placeholder='투표 멘트를 작성해주세요'
          value={this.state.name}
          onChange={this.handleChange}
          name="prosDesc"
        />
          <textarea
          value={this.state.name}
          onChange={this.handleChange}
          name="consTitle"
        />
        <textarea
          placeholder='투표 멘트를 작성해주세요'
          value={this.state.name}
          onChange={this.handleChange}
          name="consDesc"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default CreateForm;