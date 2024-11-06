function solution(num_list, n) {
    let list = num_list.reduce((arr, acc, idx) => 
              {idx % n === 0 ? arr.push([acc]) : arr[arr.length - 1].push(acc)
               return arr}, [])
                return list
}