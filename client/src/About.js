import React from 'react';
import Layout from './Layout';

const About = () => {
  return (
    <Layout>
    <div>
      <p>
        Hello, I'm Elliot Plagge. I'm a Game Designer with experience across Unity, Maya, and Adobe Suite as well as experience across Web Development languages HTML, CSS, and JavaScript as well as C, C++, and C#.
      </p>

      {/* Centered Links */}
      <div style={{ textAlign: 'center' }}>
        {/* GitHub Link */}
        <a
          href="https://github.com/FreezShocka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="GitHub"
            style={{ width: '50px', margin: '10px' }}
          />
        </a>

        {/* Artstation Link */}
        <a
          href="https://www.artstation.com/elliot_plagge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://yt3.googleusercontent.com/ytc/APkrFKaHSJNmLAK2q87SWOTXyDaXiJXpukZs2NzMaXdkzw=s900-c-k-c0x00ffffff-no-rj"
            alt="Artstation"
            style={{ width: '50px', margin: '10px' }}
          />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://www.linkedin.com/in/elliot-plagge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
            alt="LinkedIn"
            style={{ width: '50px', margin: '10px' }}
          />
        </a>
      </div>
    </div>
    </Layout>
  );
}

export default About;