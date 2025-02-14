function storeContacts(infoArray)
{
    let phoneBook = {};

    for(let entry of infoArray)
    {
        let [name, phoneNumber] = entry.split(' ');

        phoneBook[name] = phoneNumber;
    }
    
    for(let name in phoneBook)
    {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

storeContacts (['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
