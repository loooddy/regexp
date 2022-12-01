const str = `
010-3333-1314
thedkaxo12@naver.com
http://www.omdbapi.com/?apikey=7035c60c&s=forzen&
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))