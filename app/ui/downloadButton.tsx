import React from 'react';
import { saveAs } from 'file-saver';
import { Button } from '@nextui-org/react';

const DownloadButton: React.FC = () => {
  const saveFile = () => {
    saveAs('/files/example.pdf', 'example.pdf');
  };

  return (
    <div>
      <Button onClick={saveFile} className="bg-greenPrimary text-whitePrimary text-center">
        Download
      </Button>
    </div>
  );
};

export default DownloadButton;
