// /utils/config.js

const config = {
  author1: 'Dan Dyar, MA, ACS, RDCS, FASE',
  author2: "Lisa Vargas, AS, ACS, RDCS, FASE",
  versions: [
    {
      date: "7/21/2024",
      version: "0.1.5",
      notes: "adds 221 protocols"
    },
    {
      date: "7/20/2024",
      version: "0.1.4",
      notes: "refactoring away from json"
    },
    {
      date: "6/30/24; 4:50PM",
      version: "0.1.3",
      notes: "added the remainder of the media files"
    },
    {
      date: "6/30/24; 3:12 PM",
      version: "0.1.2",
      notes: "refactored version, LAST_UPDATED"
    },
    {
      date: "6/30/24",
      version: "0.1.1",
      notes: "uploaded to Amplify, forgetting about forcing it to be a static site"
    }
  ],
  protocolsConfig: [
    { name: 'Full Protocol', file: 'canonicalProtocol' },
    { name: '115 2D Parasternal Protocol', file: 'cvt_115_exam1' }
    // Add more protocols here
  ]
};

export default config;
