import React, { Component } from 'react'
import {connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    
    componentDidMount(){
        this.props.fetchSurveys();
    }
    renderSurveys(){
        return this.props.surveys.map(survey => {
            return (
                <div className="card blue-grey" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                    <p>
                        <p className = "right">
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </p>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
               {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {surveys: state.surveys};
}
export default connect(mapStateToProps,{ fetchSurveys})(SurveyList);
