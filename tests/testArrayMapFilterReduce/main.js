dipendenti=[
    {name: "Pippo", time: 15, wagePerYear: 20000},
    {name: "Pluto", time: 7, wagePerYear: 23000},
    {name: "Dino", time: 8, wagePerYear: 12000, boss: false}
]

console.log(dipendenti)

lessThan10y=dipendenti.filter(persona=>persona.time<10)

console.log(lessThan10y)
console.log(dipendenti)

soloNomi=dipendenti.map((persona=>persona.name))
console.log(soloNomi)

totStipendi=dipendenti.reduce((tot,persona)=>{
    tot+=persona.time*persona.wagePerYear
    return tot
},0)

console.log(totStipendi)