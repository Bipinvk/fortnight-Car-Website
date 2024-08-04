import * as XLSX from "xlsx";
import emailjs from "emailjs-com";
import { init } from 'emailjs-com';

export const saveToExcel = async (data) => {
  const worksheet = XLSX.utils.json_to_sheet([data]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Application Data");

  // Generate Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
  });

 

  // Convert blob to base64
  const reader = new FileReader();
  reader.readAsDataURL(dataBlob);
  reader.onloadend = function () {
    const base64data = reader.result;

    init("bdNTHW-2fQM1jdA9u");

    // Send email using EmailJS
    emailjs
      .send(
        "service_2fxwpij", // Replace with your EmailJS service ID
        "template_vwrddm6", // Your template ID
        {
          to_email: "harinvk76@gmail.com", // Replace with the desired email address
          from_name: "Car Finance Application",
          message:
            "Please find attached the Excel file with the application data.",
          attachment: base64data,
        }
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully:",
            response.status,
            response.text
          );
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };
};
