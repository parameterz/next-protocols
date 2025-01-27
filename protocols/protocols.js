// /protocols/protocols.js

import canonicalProtocol from './canonicalProtocol';
import parast_apicals from './parast_apicals';
import subcostals from './subcostals';

const protocolsConfig = [
  { name: 'Full Adult Protocol', file: 'canonicalProtocol', data: canonicalProtocol },
  { name: 'Parasternal & Apicals', file: 'parast_apicals', data: parast_apicals, note: '...'},
  { name: 'Subcostals Only', file: 'subcostals', data: subcostals, note: '...' }
  // Add more protocols here
];

export default protocolsConfig;
