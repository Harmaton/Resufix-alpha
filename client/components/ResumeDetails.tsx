import { BellIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface CVData {
  name: string;
  jobTitle: string;
  skills: string[];
  experience: string[];
  education: string[];
}

interface Props {
  cvData: CVData;
}

const ResumeDetails: React.FC<Props> = ({ cvData }) => {

  if(!cvData) return (<div className='p-2 flex flex-row items-center 
  justify-center'> 
  
 <h2 className='p-2 text-2xl '>No Resume Uploaded </h2> 
 <BellIcon className='w-8 h-10  ' />
 
  </div>);


  return (
    <div className='px-4'>
      <h2>{cvData.name}</h2>
      <h3>{cvData.jobTitle}</h3>
      <h4>Skills:</h4>
      <ul>
        {cvData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h4>Experience:</h4>
      <ul>
        {cvData.experience.map((experience, index) => (
          <li key={index}>{experience}</li>
        ))}
      </ul>
      <h4>Education:</h4>
      <ul>
        {cvData.education.map((education, index) => (
          <li key={index}>{education}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeDetails;
