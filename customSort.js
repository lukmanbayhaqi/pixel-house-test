function customSortAsc(arr) {
  let str = [];
  let num = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      num = [...num, arr[i]]
    } else if (typeof arr[i] === 'string') {
      str = [...str, arr[i]]
    };
  };

  let result = [...num, ...str];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      };
    };
  };
  return result.join(',');
}

function customSortDesc(arr) {
  let str = [];
  let num = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      num = [...num, arr[i]]
    } else if (typeof arr[i] === 'number') {
      str = [...str, arr[i]]
    };
  };

  let result = [...num, ...str];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] < result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      };
    };
  };
  return result.join(',');
}

const a = [10, 9, 102, 66, 5421, 1, 0]
const b = ['Wulan', 'Raharjo', 'Widya', 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']
const c = ['Wulan', 'Raharjo', 'Widya', 10, 9, 102, 66, 5421, 1, 0, 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']

console.log('====Ascending====')
console.log(customSortAsc(a));
console.log(customSortAsc(b));
console.log(customSortAsc(c));
console.log('====Descending====')
console.log(customSortDesc(a));
console.log(customSortDesc(b));
console.log(customSortDesc(c));
