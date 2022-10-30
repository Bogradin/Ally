import React from 'react'
import './App.css';

export const CustomDropdown = (props) => (
  <div className="form-group">
    <strong>{props.name}</strong>
    <select
      className="form-control"
      name="{props.name}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)
export default class DestinoCidade extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    fetch('https://amazon-api.sellead.com/city')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  
  render() {
    return (
      <div>
        <div className='form'>Cidade</div>
        <CustomDropdown
          name={this.state.name}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}
