// src/utils/downloadPdf.js
import html2pdf from "html2pdf.js/dist/html2pdf.bundle";

const DownloadPdf = (username, cosmicRef) => {
  const element = cosmicRef.current;

  // Scroll to top before capturing
  window.scrollTo(0, 0);

  const options = {
    margin: 0.5, // in inches
    filename: `${username}_cosmic_report.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      avoid: ['h2', 'h3', 'p', 'li', 'b'], // Prevent mid-section cuts
    }
  };

  html2pdf().set(options).from(element).save();
};

export default DownloadPdf;
