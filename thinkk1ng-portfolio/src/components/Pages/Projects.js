import React from 'react'
import gamingApp from '../images/Gaming App Project.png';
import cassetteTape from '../images/The Cassette Tape.png';
import Portfolio from '../PortfolioContainer';
// https://github.com/hmustain/The-Cassette-Tape
// https://the-cassette-tape.herokuapp.com
// https://thinkk1ng.github.io/Gaming-APP-Project/
// https://thinkk1ng.github.io/Gaming-APP-Project/



const projects = [
  {
    id: 1,
    image: {gamingApp},
    name: "Twitch Popularity Tracker",
    alt: "Twitch Popularity Tracker",
    description: "",
    repo: "https://github.com/ThinkK1ng/Gaming-APP-Project",
    link: "https://thinkk1ng.github.io/Gaming-APP-Project/",
  },
  {
    id: 2,
    image: {cassetteTape},
    name: "The Cassette Tape",
    alt: "The Cassette Tape",
    description: "",
    repo: "https://github.com/hmustain/The-Cassette-Tape",
    link: "https://the-cassette-tape.herokuapp.com",
  },
  {
    id: 3,
    image: "",
    name: "Project 3",
    alt: "",
    description: "",
    link: "",
  },
];

export default function Projects() {
  return (
    <div id="portfolio" className='col'>
      <h1>Portfolio</h1>
      <Portfolio projects={projects} />
    </div>
  );
}