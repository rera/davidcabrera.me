import React from "react"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFirst: '',
      nameLast: '',
      email: '',
      phone: '',
      message: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);

    const button = document.querySelector('#contact > form > input[type="submit"]');
    button.disabled = true
    button.value = "Sending"
  }

  render() {
    return (
      <section id="contact">
        <header>{this.props.header}</header>
        <form onSubmit={this.handleSubmit} method="POST" action="https://formspree.io/david@rerainc.com">
          <fieldset class="name">
            <legend>Name</legend>
            <p>
              <input type="text" name="nameFirst" value={this.state.nameFirst} onChange={this.handleInputChange} />
              <label for="nameFirst">First</label>
            </p>
            <p>
              <input type="text" name="nameLast" value={this.state.nameLast} onChange={this.handleInputChange} />
              <label for="nameLast">Last</label>
            </p>
          </fieldset>
          <p>
            <label for="email">Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </p>
          <p>
            <label for="phone">Phone</label>
            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="561-555-1234" value={this.state.phone} onChange={this.handleInputChange} />
          </p>
          <p>
            <label for="message">Message</label>
            <textarea name="message" value={this.state.message} onChange={this.handleInputChange} />
          </p>
          <input type="submit" value={this.props.submitText} onChange={this.handleInputChange} />
        </form>
      </section>
    );
  }
}

export default Contact
