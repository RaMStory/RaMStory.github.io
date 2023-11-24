const collection = {
    zodiac : ['Capricornus (22 dec - 19 jan)', 'Aquarius (20 jan - 18 feb)', 'Pisces (19 feb - 20 mar)', 'Aries (21 mar - 19 apr)',
'Taurus (20 apr - 20 may)', 'Gemini (21 may - 21 jun)', 'Cancer (22 jun - 22 jul)', 'Leo (23 jul - 22 aug)', 'Virgo (23 aug - 22 sep)',
'Libra (23 sep - 22 oct)', 'Scorpio (23 oct - 22 nov)', 'Sagitarius (23 nov - 21 dec)'],
    love : ['Fulfillment in love', 'Losing the person you love', 'Going to be in love', 'Single forever'],
    fortune : ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice : ['go out to travel', 'not read this', 'play more', 'give alms', 'go to sleep', 'go out to eat', 'trust no one']
};

function getRandomNumber(num){
    return Math.floor(Math.random() * num);
}

function predictMessage()
{
    let result = [];
    for(let name in collection)
    {
        const randomIndex = getRandomNumber(collection[name].length);
        switch(name)
        {
            case 'zodiac' : result.push(`Your zodiac is : ${collection[name][randomIndex]}`); break;
            case 'love' : result.push(`Predit your love : ${collection[name][randomIndex]}`); break;
            case 'fortune' : result.push(`You are having : ${collection[name][randomIndex]}`); break;
            case 'advice' : result.push(`Advice : ${collection[name][randomIndex]}`); break;
            default: break;
        }
        
    }
   return result.join('\n');
}

console.log(predictMessage());

  
//   function formatWisdom(wisdom) {
//     // Add some ASCII here?
//     // Add in more symbols to the array? like emojies or what not?
//     const formatted = personalWisdom.join('\n')
//     console.log(formatted)
//   }
  
//   formatWisdom(personalWisdom);