import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    // This loads the tsparticles package bundle, you can customize it if needed.
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fbc106",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 3,
      },
    },
  };

  return (
    <div>
      <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
    </div>
  );
};


function HomePage() {
  return (
    <div style={{height:"100vh"}}>
      <ParticlesComponent/>
    </div>
  )
}

export default HomePage



