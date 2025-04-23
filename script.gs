const staffData = {
  'Siska': '3793',
  'Friska': '0417',
  'Rico': '6565',
  'Nai Nai': '7714',
  'Zayar': '2013',
  'Jewel': '9999',
  'Zenky': '6666',
  'Suryia':'6037',
  'Vivit':'3163',
};

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function recordPunch(action, passcode) {
  const staffName = Object.keys(staffData).find(key => staffData[key] === passcode);
  if (!staffName) {
    return 'Invalid passcode';
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = getSheetNameForDate(new Date());
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = createNewSheet(ss, sheetName);
  }

  const lastRow = findLastPunchRow(sheet, staffName);
  const now = new Date();

  if (action === 'in') {
    if (lastRow && !sheet.getRange(lastRow, 4).getValue()) {
      return `${staffName} has already punched in. Please punch out first.`;
    }
    sheet.appendRow([staffName, passcode, now, '', '']);
  } else if (action === 'out') {
    if (!lastRow || sheet.getRange(lastRow, 4).getValue()) {
      return `${staffName} has not punched in.`;
    }
    sheet.getRange(lastRow, 4).setValue(now);
    const punchInTime = sheet.getRange(lastRow, 3).getValue();
    if (punchInTime) {
      const hoursWorked = (now - punchInTime) / (1000 * 60 * 60);
      sheet.getRange(lastRow, 5).setValue(hoursWorked.toFixed(2));
    }
  }
  
  calculateTotalHoursForStaff(staffName, sheetName);
  return getPunchStatus(action, staffName, now);
}

function getPunchStatus(action, staffName, time) {
  if (!(time instanceof Date && !isNaN(time))) {
    return 'Error: Invalid date object in getPunchStatus';
  }

  return `${staffName} punched ${action} at ${Utilities.formatDate(time, Session.getScriptTimeZone(), "HH:mm:ss")} on ${Utilities.formatDate(time, Session.getScriptTimeZone(), "dd/MM/yyyy")}`;
}

function findLastPunchRow(sheet, staffName) {
  const data = sheet.getDataRange().getValues();
  for (let i = data.length - 1; i >= 0; i--) {
    if (data[i][0] === staffName) {
      return i + 1; // Row index in the sheet is 1-based
    }
  }
  return null; // No previous punch found
}

function calculateTotalHoursForStaff(staffName, sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const monthlySheet = ss.getSheetByName(sheetName);
  if (!monthlySheet) return;

  let staffSheet = ss.getSheetByName(staffName);
  if (!staffSheet) {
    staffSheet = ss.insertSheet(staffName);
    staffSheet.appendRow(['Date', 'Punch In Time', 'Punch Out Time', 'Hours Worked']);
  } else {
    // Clear previous entries (except headers) before updating
    staffSheet.getRange('A2:D' + staffSheet.getLastRow()).clearContent();
  }

  const data = monthlySheet.getDataRange().getValues();
  let totalHours = 0;

  data.forEach(row => {
    if (row[0] === staffName) {
      const punchIn = row[2] && new Date(row[2]);
      const punchOut = row[3] && new Date(row[3]);
      let hoursWorked = 0;

      if (punchIn && punchOut) {
        hoursWorked = (punchOut - punchIn) / (1000 * 60 * 60);
        totalHours += hoursWorked;
      }

      staffSheet.appendRow([Utilities.formatDate(punchIn, Session.getScriptTimeZone(), "dd/MM/yyyy"), punchIn, punchOut, hoursWorked.toFixed(2)]);
    }
  });

  // Optionally append a row at the end for total hours
  staffSheet.appendRow(['Total', '', '', totalHours.toFixed(2)]);
}

function getSheetNameForDate(date) {
  return Utilities.formatDate(date, Session.getScriptTimeZone(), "MMMM yyyy");
}

function createNewSheet(ss, sheetName) {
  const newSheet = ss.insertSheet(sheetName);
  newSheet.appendRow(['Staff Name', 'Passcode', 'Punch In Time', 'Punch Out Time', 'Hours Worked']);
  return newSheet;
}
