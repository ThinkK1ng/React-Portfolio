import React from 'react'
import gamingApp from '../images/Gaming App Project.png';
import cassetteTape from '../images/The Cassette Tape.png';
import Rappor from '../images/Rappor.png';
import Portfolio from '../PortfolioContainer';



const projects = [
  {
    id: 1,
    image: { gamingApp },
    name: 'Twitch Popularity Tracker',
    alt: 'Twitch Popularity Tracker',
    description: '',
    repo: 'https://github.com/ThinkK1ng/Gaming-APP-Project',
    link: 'https://thinkk1ng.github.io/Gaming-APP-Project/',
  },
  {
    id: 2,
    image: { cassetteTape },
    name: 'The Cassette Tape',
    alt: 'The Cassette Tape',
    description: '',
    repo: 'https://github.com/hmustain/The-Cassette-Tape',
    link: 'https://the-cassette-tape.herokuapp.com',
  },
  {
    id: 3,
    image: { Rappor },
    name: 'Project 3',
    alt: 'Rappor',
    description: '',
    repo: 'https://github.com/Carter-Schmitz/Rappor',
    link: 'https://rappor-social-media.herokuapp.com',
  },
]

export default function Projects() {
  return (
    <div id="portfolio" className='col'>
      <h1>Portfolio</h1>
      <Portfolio projects={projects} />
    </div>
  );
}