function solution(intStrs, k, s, l) {
//intStrs 배열의 각 원소에서 s부터 l개까지의 숫자를 뽑는다
// 대신 k보다 큰 수만 배열에 담는다

  return intStrs.map(v=> Number(v.slice(s,s+l))).filter((num => num > k))
}
