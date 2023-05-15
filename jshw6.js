// Task 1
// function getAr(value, num) {
//   let arr = new Array(value).fill(undefined);
//   return arr.map((i) => (i = Math.round(Math.random() * num)));
// }

// console.log(getAr(4, 100));

// Task 2
// function getArr(arr, word) {
//   arr.map((_, i) => {
//     if (arr[i] === word) {
//       arr.splice(i, i);
//     }
//   });
//   return arr;
// }
// console.log(getArr(["sex", "drugs", "rock and roll"], "drugs"));

// Task 2
// function getArr(arr, word) {
//   arr.map((_, i) => {
//     if (arr.includes(word)) {
//       arr.splice(i, i);
//     }
//   });
//   return arr;
// }
// console.log(getArr(["sex", "drugs", "rock and roll"], "drugs"));

// Task 3

// function createArray() {
//   let item = 0;
//   let arr = [];
//   while (item !== null) {
//     item = prompt("введите элемент массива");
//     arr.push(item);
//   }
//   arr.pop();

//   arr.map((_, i) => {
//     if (arr[i] === "true") {
//       arr.splice(i, 1, true);
//     } else if (arr[i] === "false") {
//       arr.splice(i, 1, false);
//     } else if (arr[i] === "null") {
//       arr.splice(i, 1, null);
//     } else if (isNaN(arr[i]) === false) {
//       arr[i] = +arr[i];
//     } else if (arr[i].at(0) === "[" && arr[i].at(-1) === "]") {
//       arr[i] = arr[i].replace("[", "").replace("]", "").split(",");
//       for (let n = 0; n < arr[i].length; n++) {
//         if (isNaN(arr[i][n]) === false) {
//           arr[i][n] = +arr[i][n];
//         }
//       }
//     } else if (arr[i].at(0) === "{" && arr[i].at(-1) === "}") {
//       arr[i] = arr[i]
//         .split(" ")
//         .join("")
//         .replace("{", "")
//         .replace("}", "")
//         .split(",");
//       for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = arr[i][j].split(":");
//       }
//       arr[i] = Object.fromEntries(arr[i]);
//     }
//   });

//   return arr;
// }

// console.log(createArray());

// Task 4
const arrayOfPersons = [
    {
      name: "Ferdinant",
      surname: "Foch",
      age: 54,
      nationality: "French",
      skill: "Military management",
      zodiacSign: undefined,
      height: 173,
      isAlive: false,
    },
    {
      name: "Jackson",
      surname: "Bricks",
      age: 20,
      nationality: "USA",
      skill: "farmer",
      height: 187,
      specialTrait: "mechanical arms",
      isFictionalCharacter: true,
    },
    {
      name: "Hideo",
      surname: "Kozima",
      age: 56,
      nationality: "USA",
      skill: "game developer",
      height: 173,
      specialTrait: "genius",
      actualGames: ["Death Stranding", "Metal Gear"],
      isAlive: true,
    },
    {
      name: "Kim",
      surname: "Kardashian",
      age: 39,
      nationality: "USA",
      skill: "model",
      height: 159,
      zodiacSign: "scorpio",
    },
    {
      name: "Mia",
      surname: "Khalifa",
      age: 27,
      nationality: "Lebanon",
      skill: "actress",
      height: 157,
      zodiacSign: "saggitarius",
      specialTrait: "very exspressionable",
      isAlive: true,
      isFictionalCharacter: false,
    },
    {
      name: "Herman",
      surname: "Hesse",
      age: 85,
      nationality: "Germany",
      skill: "writer",
      zodiacSign: undefined,
      isAlive: false,
      isFictionalCharacter: false,
      bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
    },
    {
      name: "Fedor",
      surname: "Dostoevsky",
      age: 60,
      nationality: "Russia",
      skill: "writer",
      isAlive: false,
      isFictionalCharacter: false,
      bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
    },
    {
      name: "Doomguy",
      surname: undefined,
      age: undefined,
      nationality: undefined,
      skill: "demon slayer",
      zodiacSign: undefined,
      isFictionalCharacter: true,
      specialTrait: "Angry a bit",
    },
    {
      name: "Sonic",
      surname: "The Hedgehog",
      age: 13,
      nationality: undefined,
      zodiacSign: undefined,
      isFictionalCharacter: true,
      specialTrait: "Fast as f#@k",
    },
    {
      name: "Bruce",
      surname: "Wayne",
      age: 12,
      isFictionalCharacter: true,
    },
    {
      name: "Ella",
      surname: "Fitzgerald",
      age: 79,
      isFrictionalCharacter: false,
      isAlive: false,
      specialTrait: "Amazing voice",
      signatureSongs: [
        "Cry Me a river",
        "Hello Dolly",
        "Summertime",
        "In a sentimental mood",
      ],
    },
  ];
  
  // Task 4/1
  
  // function getNSA(arrayOfPersons) {
  //   const arrNSA = arrayOfPersons.map(({ name, surname, age }) => ({
  //     name,
  //     surname,
  //     age,
  //   }));
  //   arrNSA.forEach((item) => {
  //     item.surname ? (item.surname = item.surname) : (item.surname = null);
  //     item.name ? (item.name = item.name) : (item.name = null);
  //     item.age ? (item.age = item.age) : (item.age = null);
  //   });
  
  //   newArr = arrNSA.sort((a, b) => (a.surname > b.surname ? 1 : -1));
  //   return newArr;
  // }
  // console.log(getNSA(arrayOfPersons));
  
  // Task 4/2
  
  // function getNSA(arrayOfPersons) {
  //   const newAr = arrayOfPersons.filter((item) => Object.keys(item).length >= 8);
  
  //   const newArSort = newAr.sort((a, b) =>
  //     Object.keys(a).length > Object.keys(b).length ? -1 : 1
  //   );
  
  //   return newAr;
  // }
  // console.log(getNSA(arrayOfPersons));
  
  // Task 4/3
  
  // function sortAge(arrayOfPersons) {
  //   newArr = arrayOfPersons.sort((a, b) => (b.age > a.age ? -1 : 1));
  //   return newArr;
  // }
  // console.log(sortAge(arrayOfPersons));
  
  // // Task 4/4
  
  // function getZodiac(arrayOfPersons) {
  //  const  newAr=arrayOfPersons.filter(item=>'zodiacSign' in item)
  //  return newAr
  // }
  // console.log(getZodiac(arrayOfPersons));
  
  // Task 4/5
  
  // function sortObject(arrayOfPersons) {
  //   arrayOfPersons.map((item) => {
  //     item.type = -1;
  //     for (let key in item) {
  //       if (typeof item[key] === "object" && item[key] !== null) {
  //         item.type = 1;
  //       }
  //     }
  //   });
  //   let newArr = arrayOfPersons.sort((a, b) => (a.type > b.type ? -1 : 1));
  //   newArr.map((item) => delete item.type);
  //   return arrayOfPersons;
  // }
  // console.log(sortObject(arrayOfPersons));
  
  // Task 4/6
  
  // function addID(arrayOfPersons) {
  //   const min = 100;
  //   const max = 999;
  //   const newAr = arrayOfPersons.map((item) => ({
  //     ...item,
  //     ID: Math.floor(Math.random() * (max - min) + min),
  //   }));
  //   return newAr;
  // }
  // console.log(addID(arrayOfPersons));
  
  // Task 4/7
  
  // function filtFC(arrayOfPersons) {
  //   const newAr = arrayOfPersons.filter(
  //     (item) => item.isFictionalCharacter === true
  //   );
  //   newAr.map((item) => (item.fictionalUniverse = null));
  //   return newAr;
  // }
  // console.log(filtFC(arrayOfPersons));
        