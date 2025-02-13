function censor(text, word)
{
    let censored = text.replace(new RegExp(word, 'g'), repeat(word.length));

    return censored;

    function repeat(length)
    {    
        return '*'.repeat(length)
    }    
    
}

console.log(censor("A small sentence with some words", "small"));  
