// src/components/SignaturePad.js
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './SignaturePad.css';

const SignaturePad = () => {
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    console.log(dataURL);
    // Add logic to send the dataURL to the server
  };

  return (
    <div className="signature-pad">
      <SignatureCanvas 
        ref={sigCanvas}
        penColor="white"
        canvasProps={{ width: 500, height: 300, className: 'sigCanvas' }}
      />
      <div className="buttons">
        <button onClick={clear}>Clear</button>
        <button onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default SignaturePad;
