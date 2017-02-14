import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCaption from'./ImageCaption.js';
import Layout from './Layout.js';
import GuessTheNumber from './GuessTheNumber.js';
import YouClicked from './YouClicked.js';
import CharacterCounter from './CharacterCounter.js';
import CharacterLimit from './CharacterLimit.js';
import GuessTheNumber2 from './GuessTheNumber2.js';

var imageList = [
  {id: 42, source: "http://placekitten.com/g/210/210", text: "Hello kittenz!"},
  {id: 43, source: "https://facebook.github.io/react/img/logo.svg", text: "React Logo"},
  {id: 44, source: "https://media.giphy.com/media/EldfH1VJdbrwY/giphy.gif", text: "Mind Blown!"}
];



class App extends Component {
  renderImage(imageObject){
   return <ImageCaption source={imageObject.source} text={imageObject.text} key={imageObject.id}/>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Intro Workshop </h2>
        </div>
        <h2>testing ImageCaption </h2>
        <ImageCaption source="http://i.imgur.com/D8JWn.jpg" text="This is a kittenz!"/>
        <hr/>

        <h2>List of Items </h2>
        <div>
          {imageList.map(this.renderImage)}
        </div>
        <hr/>

        <h2>Testing Layout</h2>
        <Layout>
          <h2> About Us</h2>
          <p>We are <a href="https://facebook.github.io/react/">React</a> developers!</p>
        </Layout>
        <hr/>

        <h2>Number Guessing Game</h2>
        <GuessTheNumber numberToGuess={49}/>
        <hr/>

        <h2>You Clicked</h2>
        <YouClicked />
        <hr/>

        <h2>Character Counter</h2>
        <CharacterCounter />
        <hr/>

        <h2>Character Limit</h2>
        <CharacterLimit limit={140} />
        <hr/>

        <h2>Number Guessing Game ver 2</h2>
        <GuessTheNumber2 numberToGuess={42} />


      </div>
    );
  }
}


export default App;
