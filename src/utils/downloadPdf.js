import { html2pdf } from "html2pdf.js";

const DownloadPdf = (username,cosmicRef)=>{
    const element = cosmicRef.current;
    const options = {
        margin: 0.5,
        filename: `${username}.pdf`,
        image : {
            type: 'jpeg',
            quality: 0.98,
        },
        html2canvas: {scale:3},
        jsPDF: {
            unit: 'in',
            format: 'a4',
        },
        orientation: 'portrait',
    };

    html2pdf().set(options).from(element).save();
}

export default DownloadPdf;