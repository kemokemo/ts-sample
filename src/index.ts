console.log('Hello, Typescript!')

let a: number = 3
let b = a+3
let c = {
  apple: a,
  banana: b
}

let d = c.apple * 4
console.log('c.apple * 4 is ' + d)

function squareOf(n:number) {
  return n*n
}
console.log('squareOf(2) is ' + squareOf(2))