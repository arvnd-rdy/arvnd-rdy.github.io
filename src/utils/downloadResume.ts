export const downloadResume = () => {
  // Create a temporary link element
  const link = document.createElement('a');
  
  // You can either:
  // 1. Link to a PDF file in your public folder
  link.href = '/resume.pdf';
  
  // 2. Or use a Google Drive/Dropbox public link
  // link.href = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing';
  
  link.download = 'Arvind_Reddy_Resume.pdf';
  link.target = '_blank';
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Track download event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'resume_download', {
      event_category: 'engagement',
      event_label: 'resume_pdf'
    });
  }
};