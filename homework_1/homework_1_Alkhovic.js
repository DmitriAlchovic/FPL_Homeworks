const buzzFuzz = (number) => {
  for (var i = 1; i < number; i++) {
    !(i % 3) && console.log("fizz");
    !(i % 5) && console.log("buzz");
    i % 3 && i % 5 && console.log(i);
    console.log(" ");
  }
};

//buzzFuzz(22);

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return str === str.split("").reverse().join("");
};

//console.log(isPalindrome("tenet"));

const drawCalendar = (year, month) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let calendar = `   ${monthNames[month - 1]} ${year}\n Su Mo Tu We Th Fr Sa\n`;
  let day = 1;

  for (let i = 0; i < 6; i++) {
    calendar += "\n ";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        calendar += "   ";
      } else if (day > daysInMonth) {
        break;
      } else {
        calendar += day.toString().padStart(2, " ") + " ";
        day++;
      }
    }
  }

  return calendar;
};

//console.log(drawCalendar(2024, 1));

const isDeepEqual = (obj1, obj2) => {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // Recursively compare the values of each key
  for (const key of keys1) {
    if (!isDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};

const a = { prop1: 1, list: [1, 2, 3], o: { x: 2 } };
const b = { list: [1, 2, 3], o: { x: 2 } };
//console.log(isDeepEqual(a, b)); // false
b.prop1 = 1;
//console.log(isDeepEqual(a, b)); // true

function spiral(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
}

console.log(
  spiral([
    [4, 5],
    [6, 7],
  ])
); // [4,5,7,6]

console.log(
  spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,7,8,7,4,5]
console.log(
  spiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ])
); // [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]

function quadraticEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
  
    if (discriminant < 0) {
      return [];
    } else if (discriminant === 0) {
      const root = -b / (2 * a);
      return [root];
    } else {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [root1, root2];
    }
  }

  console.log(quadraticEquation(1, -8, 72)); // x^2 - 8*x + 72 -> []
  console.log(quadraticEquation(1, 12, 36)); // x^2 + 12*x + 36 -> [-6]
  console.log(quadraticEquation(1, 6, 1)); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097,-5.82842712474619]
