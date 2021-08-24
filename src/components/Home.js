import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Home extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    serverLink: process.env.REACT_APP_SERVER_URL,
    flowers: [],
  }
}

componentDidMount = async () => {
  const url = "http://localhost:3030/get-data"
  const getFlowers = await axios.get(url)
this.setState({
  flowers: getFlowers.data
})
}


  render() {
    return (
      <>
        <h1>API Flowers</h1>
        
      </>
    )
  }
}

export default Home;
