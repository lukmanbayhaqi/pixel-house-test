function palindrome(num) {
  let result = []
  let arr = []

  for (let i = 0; i < Math.ceil(num / 2) ; i++) {
    let random = Math.floor(Math.random() * (122 - 48 + 1) + 48)
    if (random > 57 && random < 65) {
      random = Math.floor(Math.random() * (122 - 65 + 1) + 65)
    }
    if (random > 90 && random < 97) {
      random = Math.floor(Math.random() * (122 - 97 + 1) + 97)
    }
    arr = [...arr, random]
  }
  if (num % 2 === 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr = [...arr, arr[i]]
    }
  } else {
    for (let i = arr.length - 2; i >= 0; i--) {
      arr = [...arr, arr[i]]
    }
  }
  for (let i = 0; i < arr.length; i++) {
    result = [...result, String.fromCharCode(arr[i])]
  }
  return result.join(',')
}

console.log(palindrome(8));
