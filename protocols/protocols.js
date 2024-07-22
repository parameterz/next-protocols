// /protocols/protocols.js

import canonicalProtocol from './canonicalProtocol';
import cvt_115_exam1 from './cvt_115_exam1';
import cvt_115_exam2 from './cvt_115_exam2';
import cvt_115_exam3 from './cvt_115_exam3';
import cvt_221_parasternals from './cvt_221_parasternals';
import cvt_221_parast_apicals from './cvt_221_parast_apicals';
import cvt_221_subcostals from './cvt_221_subcostals';

const protocolsConfig = [
  { name: 'GC Full Protocol', file: 'canonicalProtocol', data: canonicalProtocol },
  { name: '115 Exam 1 (Parasternals,2D only)', file: 'cvt_115_exam1', data: cvt_115_exam1, note: 'based on spring 2024; created summer 2024' },
  { name: '115 Exam 2 (PLAX & PSAX)', file: 'cvt_115_exam2', data: cvt_115_exam2, note: 'based on spring 2024; created summer 2024' },
  { name: '115 Exam 3 (Final; Parasternals & A4C series)', file: 'cvt_115_exam3', data: cvt_115_exam3, note: 'based on spring 2024; created summer 2024' },
  { name: '221 Parasternals (PLAX & PSAX)', file: 'cvt_221_parasternals', data: cvt_221_parasternals, note: 'based on fall 2023; created summer 2024' },
  { name: '221 Parasternal & Apicals', file: 'cvt_221_parast_apicals', data: cvt_221_parast_apicals, note: 'based on fall 2023; created summer 2024'},
  { name: '221 Subcostals Only', file: 'cvt_221_subcostals', data: cvt_221_subcostals, note: 'based on fall 2023; created summer 2024' }
  // Add more protocols here
];

export default protocolsConfig;
