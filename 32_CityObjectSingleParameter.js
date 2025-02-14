function solve(city)
{    
    for(let info in city)
    {
        console.log(`${info} -> ${city[info]}`)
    }
}

solve({name: "Sofia", area: 492, population: 1238438, country: "Bulgaria", postCode: "1000"})