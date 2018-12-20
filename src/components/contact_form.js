import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        }
    }

    handleInputChange = (event) => {
        const{value: value, name: name} = event.target;
        const {form: form} = this.state
        form[name] = value;
        this.setState({
            form: {...form}
            //this sets the form to be exactly as the new form 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state.form);
        this.reset();

    }

    reset = () => {
        this.setState({
            form: {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
        })
    }

    render() {
        const{firstName: firstName, lastName: lastName, phone: phone, email: email} = this.state.form;
        return(
            <form onSubmit={this.handleSubmit}>
                <Field name="firstName" label="First Name" type="text" value={firstName} onChange={this.handleInputChange}/>
                <Field name="lastName" label="Last Name" type="text" value={lastName} onChange={this.handleInputChange}/>
                <Field name="phone" label="Phone" type="text" value={phone} onChange={this.handleInputChange}/>
                <Field name="email" label="Email" type="text" value={email} onChange={this.handleInputChange}/>
                <button>Add Contact</button>
                <button type="button" onClick={this.reset}>Clear Form</button>
                {/* having button have attribute 'type="button"' prevents this from being the button to click to submit form*/}
            </form>
        )
    }
}

export default ContactForm;