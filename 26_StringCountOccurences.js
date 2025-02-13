function stringCountOccurences(string, count)
{
    let words = string.split(' ');
    let counter = 0;
    
    for(let word of words)
    {
        if (word === count) {
            counter++;
        }
    }

    console.log(counter)
}

stringCountOccurences("Teenage mutant ninja turtles are turtles that are in their teens.", "turtles")