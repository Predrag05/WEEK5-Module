// 1. Направити модул 'математика' који садржи следеће функције (Које враћају вредности)
//     - Површине квадрата и правоугаоника 
//     - Обими квадрата и правоугаоника
//     - Збир бројева између N i M (sum(N,M))
//     - Производ бројева између N i M (mul(N,M))
//     - Просек бројева између N i M (avg(N,M))
export function obimKvadrata(a) {
    return 4 * a
}

export function obimPravougaonika (a,b) {
    return a * 2 + b * 2
}

export function sum (N,M) {
    let suma = 0
    for (let i = N; i <= M; i++) {
        suma += i
    }
    return suma
}

export function mul (N,M) {
    let multi = 1
    for (let i = N; i <= M; i++) {
        multi *= i
    }
    return multi
}

export function avg (N,M) {
    let suma = 0
    let niz = []
    for (let i = N; i <= M; i++) {
        suma += i
        niz.push(i)
    }
    return suma / niz.length
}


// export { obimKvadrata, obimPravougaonika }