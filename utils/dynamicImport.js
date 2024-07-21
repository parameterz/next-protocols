// /utils/dynamicImport.js

const dynamicImportProtocol = async (protocolName) => {
    switch (protocolName) {
      case 'Full Protocol':
        return import('../protocols/canonicalProtocol.js'); // Correct path
      case '115 2D Parasternal Protocol':
        return import('../protocols/115Parasternal2DOnly.js'); // Correct path
      // Add more cases here as you add more protocols
      default:
        return null;
    }
  };
  
  export default dynamicImportProtocol;
  