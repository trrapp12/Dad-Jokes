(() => {

// import { wordsData } from "../src/wordsData"


const wordsData = [
    'laugh',
    'memes',
    'gag',
    'humor',
    'funny',
    'humour',
    'jest',
    'jape',
    'prank',
    'antic',
    'pun',
    'fool',
    'irony',
    'clown',
    'trick',
    'chuckle',
    'quip',
    'satire',
    'giggle',
    'banter',
    'comedian',
    'puns',
    'caper',
    'comedy',
    'drollery',
    'gags',
    'quips',
    'joke',
    'LOL',
    'jokes',
    'zingers',
    'guffaw',
    'snicker',
    'insults',
    'parodies',
    'sarcasm',
    'skits',
    'parody',
    'funnier',
    'laughing',
    'chuckles',
    'joked',
    'anecdote',
    'joker',
    'monologue',
    'guffaws',
    'pranks',
    'snide',
    'comedic',
    'liners',
    'jokey',
    'ribbing',
    'images',
    'remarks',
    'gelotology',
    'lines',
    'cliche',
    'poke fun',
    'bits',
    'posts',
    'teasing',
    'repartee',
    'scenes',
    'witty',
    'memes',
    'things',
    'kidded',
    'talk',
    'content',
    'poke fun',
    'moments',
    'patter',
    'spoofs',
    'laughs',
    'dialogue',
    'ideas',
    'quotes',
    'takes',
    'jabs',
    'funniest',
    'fun',
    'giggles',
    'trolls',
    'themes',
    'cliches',
    'roasts',
    'tropes',
    'opinions',
    'trolling',
    'ribald',
    'one',
    'flirts',
    'taunts',
    'quip',
    'hints',
    'comics',
    'songs',
    'smirk',
    'story',
    'riff',
    'deadpan',
    'joking',
    'light',
    'sketch',
    'barbs',
    'laughed',
    'digs',
    'episodes',
    'giggling',
    'hilarity',
    ]

let container = document.getElementById('circle2--p');
let factor = .1

function createRandInt () {
    return Math.floor(Math.random() * wordsData.length)
    
}

function resetWord (int) {
    let newInt = createRandInt()
    container.innerText = wordsData[newInt]
}

resetWord()

setInterval(() => {
    resetWord();
}, 4000);

})()