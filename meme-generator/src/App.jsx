import React from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Description from "./components/Header/Description/Description.jsx";
import Form from "./components/Form/Form.jsx";
import Meme from "./components/Meme/Meme.jsx";

class App extends React.Component {
  state = {
    topText: "",
    bottomText: "",
    memeTopText: "",
    memeBottomText: "",
    allMemeImgs: [],
    randomImg: "",
    error: null,
  };

  // componentDidMount() method to fetch images using async/await
  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:5000/memes");
      this.setState({ allMemeImgs: response.data.memes });
    } catch (error) {
      this.setState({ error: "Failed to load memes. Please try again." });
    }
  }

  // Method to change the value of input fields
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Method to submit form and create meme
  handleSubmit = (event) => {
    event.preventDefault();
    const { allMemeImgs } = this.state;
    if (allMemeImgs.length === 0) return;

    const random =
      allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)].url;
    this.setState({
      randomImg: random,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Description />
        {this.state.error && <p className="error">{this.state.error}</p>}
        <div className="content__container">
          <Form
            topText={this.state.topText}
            bottomText={this.state.bottomText}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Meme
            randomImg={this.state.randomImg}
            topText={this.state.topText}
            bottomText={this.state.bottomText}
          />
        </div>
      </div>
    );
  }
}

export default App;
