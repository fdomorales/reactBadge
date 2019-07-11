import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData = async()=>{
    this.setState({loading:true, error:null});
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character/');
      const data = response.json();
      this.setState({
        loading: false,
        data: data,
      });
    } catch (error) {
      this.setState({ 
        loading: false,
        error: error, 
      });
    }
  }
  

  render() {
    if (this.state.loading === true){
      return 'Loading...';
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data.results} />

        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
