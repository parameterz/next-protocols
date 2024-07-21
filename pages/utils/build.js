// pages/utils/build.js
import { useState } from 'react';
import canonicalProtocol from '../../protocols/canonicalProtocol';

const Build = () => {
  const [selectedViews, setSelectedViews] = useState([]);
  const [output, setOutput] = useState('');

  const handleCheckboxChange = (index) => {
    setSelectedViews((prevSelectedViews) => {
      if (prevSelectedViews.includes(index)) {
        return prevSelectedViews.filter((i) => i !== index);
      } else {
        return [...prevSelectedViews, index];
      }
    });
  };

  const generateDerivedProtocol = () => {
    const derivedDescriptions = canonicalProtocol
      .filter((_, index) => selectedViews.includes(index))
      .map(item => item.description);

    const outputString = `[\n${derivedDescriptions.map(desc => `  "${desc}"`).join(',\n')}\n]`;
    setOutput(outputString);
  };

  return (
    <div className="container">
      <h1>Select Views for Derived Protocol</h1>
      <table role="grid" style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>View</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Select</th>
          </tr>
        </thead>
        <tbody>
          {canonicalProtocol.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{item.view}</td>
              <td style={styles.td}>{item.description}</td>
              <td style={styles.td}>
                <input
                  type="checkbox"
                  checked={selectedViews.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="primary" onClick={generateDerivedProtocol}>Generate Derived Protocol</button>
      {output && (
        <div>
          <h2>Derived Protocol Output</h2>
          <pre style={styles.pre}>{output}</pre>
        </div>
      )}
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f4f4f4',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
  evenRow: {
    backgroundColor: '#f9f9f9',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  pre: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default Build;
