// Variables

let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');

//List of quotes
const quotes = [
    {
     quote: '"The best way to find yourself is to lose yourself in the service of others."',
     person: 'Mahatma Gandhi'   
    }, {
        quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
        person: 'Albert Einstein'
    }, {
        quote: '"At his best, man is the noblest of all animals; separated from law and justice he is the worst."',
        person: 'Aristotle'
    }, {
        quote: '"The will must be stronger than the skill."',
        person: 'Muhammad Ali'
    }, {
        quote: '"It isn\'t the mountains ahead that wear you down. It\'s the pebble in your shoe."',
        person: 'Muhammad Ali'
    }, {
        quote: '"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for."',
        person: 'Bob Marley'
    }, {
        quote: '"The people who are trying to make this world worse are not taking the day off. Why should I?"',
        person: 'Bob Marley'
    }, {
        quote: '"The unexamined life is not worth living."',
        person: 'Socrates'
    }, {
        quote: '"He who thinks great thoughts, often makes great errors."',
        person: 'Martin Heidegger'
    }, {
        quote: '"No man ever steps in the same river twice, for it\'s not the same river and he\'s not the same man."',
        person: 'Heraclitus'
    }, {
        quote: '"There is only one good, knowledge, and one evil, ignorance."',
        person: 'Socrates'
    }, {
        quote: '"He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god."',
        person: 'Aristotle'
    }, {
        quote: '"Is man merely a mistake of God\'s? Or God merely a mistake of man\'s?"',
        person: 'Friedrich Nietzsche'
    }, {
        quote: '"The greater teh difficulty, the more glory in surmounting it."',
        person: 'Epicurus'
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});