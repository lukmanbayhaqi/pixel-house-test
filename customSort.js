function bubble(arr) {
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

console.log(bubble([10, 9, 102, 66, 5421, 1, 0]));

console.log(bubble(['Wulan', 'Raharjo', 'Widya', 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']));

console.log(bubble(['Wulan', 'Raharjo', 'Widya', 10, 9, 102, 66, 5421, 1, 0, 'Yuda', 'Cinta', 'Iskandar', 'Hidayat', 'Kusuma', 'Indah', 'Jusuf']));