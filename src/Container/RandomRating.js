import React from 'react';
import Button from '@material-ui/core/Button';
import Movies from '../Movies.json';
import Rating from '../Component/Rating';

export default class RandomRating extends React.Component {
  constructor(props) {
    super(props)
    let rows = []
    Object.keys(Movies.data).map(key => {
      rows.push({ movie: Movies.data[key].movie, rating: Movies.data[key].rating })
    })
    this.state = { randomlyRatingStatus: false, data: rows };
  }
  checkStatus = () => {
    this.setState({
      randomlyRatingStatus: !this.state.randomlyRatingStatus
    });

  }
  // ================================================================
  componentDidUpdate() {
    if (this.state.randomlyRatingStatus) {
      this.randomRating(true);
    } else {
      this.randomRating(false);
    }
  }
  // ================================================================
  randomRating = (go) => {
    if (go) {
      let newData = [... this.state.data]
      let randomTime = this.getRandomInt(7);
      if (randomTime <= 0) {
        randomTime = 1;
      }
      randomTime = randomTime * 1000;

      console.log(`Started ${randomTime}`);

      this.setState(() => {
        time : setInterval(() => {

          this.stuff(newData)
        }
          , randomTime);
      })

    }
    if (!go) {
      clearInterval(this.state.time);
      console.log("Stoped!");

    }
  }

  stuff = (newData) => {
    let randomRate = (Math.random() * (10)).toFixed(1);
    let randomItem = this.getRandomInt(this.state.data.length);
    newData[randomItem].rating = randomRate
    console.log(newData);
    newData.sort((a, b) => (a.rating > b.rating) ? 1 : -1)
    this.setState({
      data: newData
    })
  }

  getRandomInt = max => {
    let number = Math.floor(Math.random() * (max))
    return number;
  }

  render() {
    return (
      <div>
        <Rating rows={this.state.data.sort((a, b) => (a.rating < b.rating) ? 1 : -1)} />
        <Button variant="contained" color="primary" onClick={this.checkStatus}>Random Rating</Button>

      </div>

    )
  }

}
