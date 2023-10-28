import React from 'react';
import jsPDF from 'jspdf';

const Resume = ({ resumeData }) => {
  const downloadResumeAsPDF = () => {
    const pdf = new jsPDF();

    pdf.setFillColor(255, 165, 0); // orange
    pdf.rect(0, 0, pdf.internal.pageSize.getWidth() / 4, pdf.internal.pageSize.getHeight(), 'F');
    // Add your styling and content here
    pdf.setFontSize(30);
    pdf.text(90, 30, 'Resume ', { underline: true });

    pdf.setFontSize(21);
    pdf.text(10, 70, '•Name:');
    pdf.setFontSize(16);
    pdf.text(54, 70, resumeData.name);

    pdf.setFontSize(21);
    pdf.text(10, 90, '•Education:');
    pdf.setFontSize(16);
    pdf.text(54, 90, resumeData.education);

    pdf.setFontSize(21);
    pdf.text(10, 110, '•Experience:');
    pdf.setFontSize(16);
    pdf.text(54, 110, resumeData.experience);

    pdf.setFontSize(21);
    pdf.text(10, 130, '•Skills:');
    pdf.setFontSize(16);
    pdf.text(54, 130, resumeData.skills);

    pdf.save('resume.pdf');
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h1 className="text-primary">Resume Preview</h1>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Name:</span>
        {resumeData.name}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Education</span> <hr />{resumeData.education}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Experience</span> <hr />{resumeData.experience}
      </p>
      <p className="text-primary">
        <span style={{ fontWeight: 'bold' }}>Skills</span> <hr />{resumeData.skills}
      </p>

      <button onClick={downloadResumeAsPDF} className="done-button">
        Done
      </button>
    </div>
  );
};

export default Resume;
