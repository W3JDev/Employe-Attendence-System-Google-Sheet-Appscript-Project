# Automated Time Attendance System

This repository contains the implementation of a **Staff Punch-In System**, which utilizes Google Apps Script to manage staff attendance and calculate working hours. The system is designed to be simple yet efficient, leveraging a web-based HTML interface and integration with Google Sheets for data storage and reporting.

## Features

1. **Punch-In and Punch-Out System**:
   - Employees can punch in and out using a 4-digit passcode.
   - The system validates passcodes and records the punch-in/out times.

2. **Google Sheets Integration**:
   - Attendance data is dynamically stored in Google Sheets.
   - Automatically calculates total working hours for each employee.

3. **Dynamic Sheet Creation**:
   - A new sheet is created for each month to organize data.
   - Separate sheets for individual employees to summarize their monthly hours.

4. **Live Web Interface**:
   - A responsive and user-friendly interface for punch-in and punch-out actions.
   - Accessible via the live link below.

5. **Easy Collaboration**:
   - Google Sheets view link with the ability to request edit access.
   - Users can copy the implementation for their own use, provided they mention the source repository and author.

---

## Live Links

### Punch-In/Out HTML Page
- **URL**: [Live Punch-In/Out Page](https://script.google.com/macros/s/AKfycbxQTIP797oTLYw7-9vrTgIIquaMLLlZ7-IWYD7mhvZKiZw6CjX3s4HdAIe1myohPDIxdQ/exec)

### Google Sheet for Attendance
- **URL**: [View Attendance Sheet](https://docs.google.com/spreadsheets/d/1di6G3umhb2TfT_yZ66D3Y92nLO4YFGAiXbcne71la5s/edit?usp=sharing)  
  *You can request edit access via Google Sheets or contact me for collaboration.*

---

## How It Works

### 1. **HTML Frontend**
The `index.html` file provides a clean and responsive interface for staff to punch in and punch out. Key elements include:
- A password input for the 4-digit passcode.
- Buttons to record either a "Punch In" or "Punch Out" action.
- JavaScript integration to send requests to the Google Apps Script backend.

### 2. **Google Apps Script Backend**
The `Code.gs` file contains the core logic for handling attendance data:
- **Passcode Validation**: Ensures only valid staff members can punch in or out.
- **Time Recording**: Logs punch-in and punch-out times, ensuring no duplicate punches.
- **Sheet Management**:
  - Dynamically creates a new sheet for each month.
  - Maintains a summary sheet for each employee with total hours worked.
- **Hours Calculation**: Automatically calculates total working hours based on punch-in and punch-out times.

---

## Usage and Collaboration

- **Usage**: Feel free to use this system for your own organization or projects. You can copy the Google Sheet and the repository code as long as you give proper credit.
- **Attribution**: Please reference this repository and mention my GitHub profile: [W3JDev](https://github.com/W3JDev).
- **Collaboration**: If you'd like to collaborate or have questions, feel free to contact me via GitHub.

---

## Contact Me
- **GitHub**: [W3JDev](https://github.com/W3JDev)
- **Email**: mnjewelps@gmail.com
