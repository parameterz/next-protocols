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
    <div>
      <h1>Select Views for Derived Protocol</h1>
      <table>
        <thead>
          <tr>
            <th>View</th>
            <th>Description</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {canonicalProtocol.map((item, index) => (
            <tr key={index}>
              <td>{item.view}</td>
              <td>{item.description}</td>
              <td>
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
      <button onClick={generateDerivedProtocol}>Generate Derived Protocol</button>
      {output && (
        <div>
          <h2>Derived Protocol Output</h2>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default Build;
