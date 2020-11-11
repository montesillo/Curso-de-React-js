import React from 'react';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }, 
    };
    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };
    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
        } catch (error){
            this.setState({ loading: false, error: error })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                             firstName={this.state.form.firstName || 'First_name'}
                            lastName={this.state.form.lastName || 'Last_name'}
                            twitter={this.state.form.twitter || 'Twitter'}
                            jobTitle={this.state.form.jobTitle || 'Job_title'}
                            email={this.state.form.email || 'email'}
                            avatarUrl="https://www.gravatar.com/avatar?d=identicon" />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange = {this.handleChange}
                            onSubmit={this.handleSubmit} 
                            formValues = {this.state.form}
                            error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;