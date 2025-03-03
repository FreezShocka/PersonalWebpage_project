import React from 'react';
import Layout from './Layout.js';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
  return (
    <Layout>
      <h1>My Projects</h1>
      <div className="projects-container">
        <section className="university-projects">
          <h2>University Projects</h2>
          <div className="project-box">
            <h3>CauldronCraft</h3>
            <p>
              CauldronCraft is a magical crafting game where players brew potions and create spells using various ingredients. The game features a rich storyline and immersive gameplay.
            </p>
            <div className="media-box">
              {/* Placeholder for images or videos */}
              <img src="path/to/cauldroncraft-image.jpg" alt="CauldronCraft" />
            </div>
          </div>
          <div className="project-box">
            <h3>Desolate Haze</h3>
            <p>
              Desolate Haze is a post-apocalyptic survival game where players navigate through a desolate world, scavenging for resources and fighting off hostile creatures.
            </p>
            <div className="media-box">
              {/* Placeholder for images or videos */}
              <video src="/DesolateHazeTRS.mp4" controls />
              <img src="path/to/desolatehaze-image.jpg" alt="Desolate Haze" />
            </div>
          </div>
        </section>
        <section className="game-jams">
          <h2>Game Jams</h2>
          <div className="project-box">
            <h3>Uproot</h3>
            <p>
              Uproot is a puzzle-platformer game created during a game jam. Players control a plant character that can manipulate the environment to solve puzzles and progress through levels.
            </p>
            <div className="media-box">
              {/* Placeholder for images or videos */}
              <img src="path/to/uproot-image.jpg" alt="Uproot" />
            </div>
          </div>
          <div className="project-box">
            <h3>Power Surge</h3>
            <p>
              Power Surge is an action-packed game developed during a game jam. Players harness electrical powers to defeat enemies and overcome obstacles in a futuristic setting.
            </p>
            <div className="media-box">
              {/* Placeholder for images or videos */}
              <img src="path/to/powersurge-image.jpg" alt="Power Surge" />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Projects;