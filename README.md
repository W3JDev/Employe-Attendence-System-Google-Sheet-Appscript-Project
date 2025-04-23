# 🕒 Automated Attendance System with Google Apps Script

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-✔️-green)](https://developers.google.com/apps-script)
[![Google Sheets Integration](https://img.shields.io/badge/Google%20Sheets-✔️-green)](https://www.google.com/sheets/about/)

A cloud-based solution to streamline staff attendance tracking using Google Apps Script, with seamless integration into Google Sheets. Eliminate manual errors, enhance accuracy, and simplify payroll processing.

---

## 🌟 Features
- **Punch-In/Out System**: Web and mobile-friendly interface for staff.
- **Real-Time Google Sheets Sync**: Automatically records attendance data.
- **Role-Based Access Control**: Customizable permissions for admins, managers, and staff.
- **Automated Reports**: Generate detailed attendance summaries and export to PDF.
- **Cloud Storage**: Secure, accessible data storage with real-time updates.
- **Payroll Integration**: Future-ready for seamless payslip generation.

 ![Punch-In Interface](https://github.com/user-attachments/assets/2b33d009-c2eb-43d3-abca-3318f30f61f4)
 <!-- Add screenshot placeholder -->
*Example: Punch-In Interface with 4-digit password authentication.*

---

## 📊 Google Sheets Integration
All attendance data is stored in Google Sheets, enabling:
- **Centralized Data Management**: Track attendance across teams in one place.
- **Automated Calculations**: Total hours, overtime, and shift discrepancies.
- **Sharing Controls**: Securely share data with stakeholders.
- **Dashboard Visualization**: Built-in charts for attendance trends.

![Google Sheets Dashboard](https://github.com/user-attachments/assets/50e7005a-a40b-44d5-b2f6-0775faa3a35f)
 <!-- Add screenshot placeholder -->
*Example: Attendance dashboard with real-time data.*

---

## 🛠️ How It Works

### 1. HTML Interface
The live punch-in/out interface is accessible via the following link:  
🔗 [**Punch-In/Out Page**](https://script.google.com/macros/s/AKfycbxQTIP797oTLYw7-9vrTgIIquaMLLlZ7-IWYD7mhvZKiZw6CjX3s4HdAIe1myohPDIxdQ/exec)  

### 2. Google Sheets Integration
Attendance data is stored and managed in a Google Sheet. You can view the live sheet here:  
🔗 [**Attendance Sheet (View Only)**](https://docs.google.com/spreadsheets/d/1di6G3umhb2TfT_yZ66D3Y92nLO4YFGAiXbcne71la5s/edit?usp=sharing)  

*To request edit access, use the Google Sheet’s request feature or contact me directly. You are free to copy this system as long as proper credit is given to my GitHub profile and repository.*

---

## 🛠️ Apps Script Code Snippets

### Punch-In/Punch-Out Handler
```javascript
function handlePunch(action) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Attendance");
  const timestamp = new Date();
  const user = Session.getActiveUser().getEmail();
  
  // Validate 4-digit password (stored in another sheet)
  const password = validatePassword(user); // Custom function
  
  if (password) {
    sheet.appendRow([user, action, timestamp]);
    return `Punch ${action} recorded at ${timestamp.toLocaleString()}`;
  }
  throw new Error("Invalid credentials.");
}
```

### Automated Report Generator
```javascript
function generateMonthlyReport() {
  const sheet = SpreadsheetApp.getActive().getSheetByName("Attendance");
  const data = sheet.getDataRange().getValues();
  const report = processData(data); // Custom logic for totals/overtime
  
  // Save to PDF and email to managers
  const pdf = createPDF(report);
  MailApp.sendEmail("manager@company.com", "Monthly Attendance Report", { attachments: [pdf] });
}
```

---

## 📈 Case Study: Muze Cafe
**Problem**: Staff lateness, double-punching fraud, and thumbprint system glitches.  
**Solution**: Implemented automated tracking with Google Sheets integration.  
**Results**:
- ✅ **20% reduction in late arrivals**.
- ✅ **Zero manual errors** in overtime calculations.
- ✅ **98% staff satisfaction** with fair tracking.

---

## 🆚 Why Choose This System?
| Feature                | Our System       | Traditional Systems |
|------------------------|------------------|---------------------|
| **Cost**               | Low              | High                |
| **Accuracy**           | 100% automated   | Human-dependent     |
| **Real-Time Access**   | Yes              | No                  |
| **Scalability**        | Unlimited users  | Limited             |
| **Security**           | Role-based access| Basic PINs          |

---

## 🚀 Future Enhancements
- Individual staff punch cards with auto-PDF generation.
- Direct payroll system integration.
- AI-driven anomaly detection for suspicious punches.

---

## 📥 Installation
1. **Clone this repository**:
   ```bash
   git clone https://github.com/W3JDev/Automated-Time-Attendance-.git
   ```
2. **Deploy the Apps Script project** via Google Script Editor.
3. **Configure Google Sheets**:
   - Create sheets named `Attendance`, `Users`, and `Reports`.
   - Set up [trigger-based automation](https://developers.google.com/apps-script/guides/triggers).

---

## 📞 Contact
- **GitHub**: [W3JDev](https://github.com/W3JDev)
- **Email**: [W3J.BTC@gmail.com](mailto:w3j.btc@gmail.com)
- **LinkedIn**: [linkedin.com/in/MN-Jewel](https://www.linkedin.com/in/mn-jewel)

![QR Code](https://github.com/user-attachments/assets/7f009dab-4dc3-4c8d-9424-892c7d5bcca6)
 <!-- Add QR code placeholder -->
 
SCAN THE QR CODE TO ACCESS OUR AUTOMATED ATTENDANCE SYSTEM INTERFACE

 User Code: 9999
---

**🌟 Developed by MN Jewel for W3JDEV**  
*Accurate. Automated. Efficient.*
