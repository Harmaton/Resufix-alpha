import { FaceSmileIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const FileInput = () => {

    const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  };
  
  return (
    <div className="flex flex-col items-center p-2 bg-blue-100 h-15  ">
      <label className="bg-blue-400 py-2 px-4 rounded-lg shadow-lg hover:shadow-xl items-center justify-center cursor-pointer ">
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
          className="hidden "
        />
        <i className="fas fa-upload mr-2"></i>
       <h3 className='font-bold p-2 text-center flex text-2xl '> Upload Resume <FaceSmileIcon className='w-6 h-6 flex' /> </h3>
       <span className='font-light text-center animate-pulse'>"only PDF || WORD accepted"</span>
      </label>
      {file && (
        <p className="text-gray-700 mt-3">
          {file.name} ({file.size / 1024 / 1024} MB)
        </p>
      )}
    </div>
  );
};

export default FileInput;
