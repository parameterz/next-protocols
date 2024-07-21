// /app/page.js

'use client';

import React, { useState } from 'react';
import ProtocolSelector from '../components/ProtocolSelector';
import ImageViewer from '../components/ImageViewer';
import NavigationControls from '../components/NavigationControls';
import protocolsConfig from '../protocols/protocols';
import mapDerivedProtocol from '../utils/mapDerivedProtocol';
import config from '../utils/config';
import '../styles/global.css';

const HomePage = () => {
  const [currentProtocol, setCurrentProtocol] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProtocolSelect = (file) => {
    const selectedProtocol = protocolsConfig.find(protocol => protocol.file === file);
    if (selectedProtocol) {
      const derivedProtocol = selectedProtocol.file === 'canonicalProtocol' 
        ? selectedProtocol.data 
        : mapDerivedProtocol(selectedProtocol.data);
      setCurrentProtocol(derivedProtocol);
      setCurrentIndex(0);
    } else {
      setCurrentProtocol([]);
      setCurrentIndex(0);
    }
  };

  const currentImage = currentProtocol.length > 0 ? currentProtocol[currentIndex] : null;

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % currentProtocol.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + currentProtocol.length) % currentProtocol.length);
  };

  const handleSkip = (index) => {
    if (index >= 0 && index < currentProtocol.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div>
      <h1>Echo Protocol Viewer</h1>
      <ProtocolSelector protocols={protocolsConfig} onSelect={handleProtocolSelect} />
      {currentImage ? (
        <>
          <div className="description">
            <h2>{currentImage.title}</h2>
            <p>{currentImage.description}</p>
          </div>
          <div className="imageViewer">
            <ImageViewer currentImage={currentImage} />
          </div>
        </>
      ) : (
        <div className="no-selection">Please select a protocol to view images.</div>
      )}
      {currentProtocol.length > 0 && (
        <div className="navigationControls">
          <NavigationControls
            currentIndex={currentIndex}
            total={currentProtocol.length}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        </div>
      )}
      <footer className="build-info">
        Build Version: {config.versions[0].version} | Build Date: {config.versions[0].date}
        <p>{config.author1}</p>
        <p>&</p>
        <p>{config.author2}</p>
      </footer>
    </div>
  );
};

export default HomePage;
