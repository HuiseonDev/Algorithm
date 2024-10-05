function solution(arr1, arr2) {
   return arr1.length === arr2.length 
                ?
                    arr1.reduce((acc, i) => { return acc + i}, 0)
                    >
                    arr2.reduce((acc, i) => { return acc + i}, 0)
                        ? 1
                        :  arr1.reduce((acc, i) => { return acc + i}, 0)
                            ==
                            arr2.reduce((acc, i) => { return acc + i}, 0)
                                ? 0 : -1
                : arr1.length > arr2.length 
                    ? 1 : -1
}