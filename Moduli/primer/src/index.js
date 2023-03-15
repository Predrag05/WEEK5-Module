// Модули - можемо да поделимо наш код у више фајллова
// Греску приказује у одређеном фајлу после који има мого мање линија кода
// Лепота кода + лакше тестирати код
import { test, saberi } from './modul1.js'
import { obimKvadrata, obimPravougaonika, sum, mul, avg } from './matematika.js'

test() // je iz ./modul1.js i ispisuje se u console.log jer ima u samoj funkciji ispis console.log()

saberi(4,5) // je iz ./modul1.js i ispisuje se u console.log jer ima u samoj funkciji ispis console.log()

console.log(obimKvadrata(5))

console.log(obimPravougaonika(5,9))

console.log(sum(5,9))

console.log(mul(8,9))

console.log(avg(3,9))







console.log('БРАВО ПРЕДРАЖЕ ЗА ОВО ВЕЖБАЊЕ!!!')