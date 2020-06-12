function randomArr(num1, num2) {
  let stringArr = ['Wulan', 'Raharjo', 'Widya', 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']
  let result = []

  for (let i = 0; i < num1; i++) {
    let temp = []
    for (let j = 0; j < num2; j++) {
      let randomNum = Math.floor(Math.random() * stringArr.length) + 1
      if (randomNum >= stringArr.length) {
        randomNum -= Math.floor(Math.random() * randomNum) + 1
      }
      temp = [...temp, stringArr[randomNum]]
      stringArr.splice(randomNum, 1)
    }
    result = [...result, temp]
  }
  return result.join(',')
}

console.log(randomArr(2, 5))
