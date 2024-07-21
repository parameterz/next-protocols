// /protocols/protocols.js

import canonicalProtocol from './canonicalProtocol';
import cvt_115_exam1 from './cvt_115_exam1';

const protocolsConfig = [
  { name: 'GC Full Protocol', file: 'canonicalProtocol', data: canonicalProtocol },
  { name: '115 Parasternal ONLY', file: 'cvt_115_exam1', data: cvt_115_exam1 }
  // Add more protocols here
];

export default protocolsConfig;
