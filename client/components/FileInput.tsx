import React, { useState } from 'react';

const FileInput = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex flex-col items-center py-5 mt-10 bg-gray-200">
      <label className="bg-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer">
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleChange}
          className="hidden"
        />
        <i className="fas fa-upload mr-2"></i>
        Upload PDF/Word file
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
