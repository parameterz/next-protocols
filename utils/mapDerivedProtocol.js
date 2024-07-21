// /utils/mapDerivedProtocol.js

import canonicalProtocol from '../protocols/canonicalProtocol';

const mapDerivedProtocol = (derivedProtocol) => {
  if (derivedProtocol === canonicalProtocol) {
    return canonicalProtocol;
  }

  return derivedProtocol.map(view => {
    const matchingItem = canonicalProtocol.find(item => item.description === view);
    return matchingItem ? { ...matchingItem } : null;
  }).filter(item => item !== null);
};

export default mapDerivedProtocol;
