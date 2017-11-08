import React, { Component } from 'react';
import './Searchbar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../../actions/Weather';

class Searchbar extends Component {
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.termChange = this.termChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }

      termChange(event) {
          this.setState({
            term: event.target.value
          });
      }
      onFormSubmit(event){
          event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
      }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="row">
                    <div className="col-sm-8">
                        <input type="text" placeholder="Enter the name of the city in the USA" className="form-control" onChange={this.termChange} value={this.state.term}/>
                    </div>
                    <button type="submit" className="btn btn-danger">Search</button>
                </div>
                </form>
                
                
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);