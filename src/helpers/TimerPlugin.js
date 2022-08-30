function TimerPlugin(assignmentList, index) {
  const timeArray = ["day", "hour", "minute", "second"];
  var msecTotal =
    new Date(assignmentList[index].dueDate).getTime() - new Date().getTime();
  var numOfDays = Math.floor(msecTotal / 86400000);
  var msecsinDays = msecTotal % 86400000;
  var numOfHours = Math.floor(msecsinDays / 3600000);
  var msecsinHours = msecsinDays % 3600000;
  var numOfMinutes = Math.floor(msecsinHours / 60000);
  var msecsinMinutes = msecsinHours % 60000;
  var numOfSeconds = Math.floor(msecsinMinutes / 1000);
  function getTimeSubstr(unit) {
    if (unit === "day") {
      if (numOfDays > 1) {
        return numOfDays + " " + unit + "s";
      }
      if (numOfDays === 1) {
        return numOfDays + " " + unit;
      }
      if (numOfDays === 0) {
        return "";
      }
    }
    if (unit === "hour") {
      if (numOfHours > 1) {
        return numOfHours + " " + unit + "s";
      }
      if (numOfHours === 1) {
        return numOfHours + " " + unit;
      }
      if (numOfHours === 0) {
        return "";
      }
    }
    if (unit === "minute") {
      if (numOfMinutes > 1) {
        return numOfMinutes + " " + unit + "s";
      }
      if (numOfMinutes === 1) {
        return numOfMinutes + " " + unit;
      }
      if (numOfMinutes === 0) {
        return "";
      }
    }
    if (unit === "second") {
      if (numOfSeconds > 1) {
        return numOfSeconds + " " + unit + "s";
      }
      if (numOfSeconds === 1) {
        return numOfSeconds + " " + unit;
      }
      if (numOfSeconds === 0) {
        return "";
      }
    }
  }
  const newTimeArray = timeArray.map(getTimeSubstr);
  function removeBlanks(unit) {
    if (unit !== "") {
      return unit;
    }
  }
  const filteredArray = newTimeArray.filter(removeBlanks);
  const delimitedStr = filteredArray.join(", ");
  function perfectTimeStr(str) {
    function sumOfCommas(str) {
      function makeTable(strLength, sum) {
        if (strLength !== str.length) {
          if (str.charAt(strLength) === ",") {
            return makeTable(strLength + 1, sum + 1);
          } else {
            return makeTable(strLength + 1, sum);
          }
        } else {
          return sum;
        }
      }
      return makeTable(0, 0);
    }
    if (sumOfCommas(str) > 1) {
      return (
        "You have " +
        str.substr(0, str.lastIndexOf(",") + 1) +
        " and" +
        str.substr(str.lastIndexOf(",") + 1, str.length) +
        " left to submit " +
        assignmentList[index].assignmentTitle +
        "."
      );
    } else if (sumOfCommas(str) === 1) {
      return (
        "You have " +
        str.substr(0, str.indexOf(",")) +
        " and" +
        str.substr(str.indexOf(",") + 1, str.length) +
        " left to submit " +
        assignmentList[index].assignmentTitle +
        "."
      );
    } else if (str.length === 0) {
      return assignmentList[index].assignmentTitle + " is now overdue.";
    } else {
      return (
        "You have " +
        str +
        " left to submit " +
        assignmentList[index].assignmentTitle +
        "."
      );
    }
  }
  return perfectTimeStr(delimitedStr);
}

export default TimerPlugin;
