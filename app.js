const quotes=[
    {
        quote:'A writer is someone for whom writing is more difficult than it is for other people.',
        author:'-Thomas Mann'
    },
    {
        quote:'A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.',
        author:' -G.K. Chesterton'
    },
    {
        quote:'Ive got the key to my castle in the air, but whether I can unlock the door remains to be seen.',
        author:'-Louisa May Alcott'
    },
    {
        quote:'Anybody who has survived his childhood has enough information about life to last him the rest of his days.',
        author:'-Flannery O\'Connor'
    },
    {
        quote:'If you have a dream, don’t just sit there. Gather courage to believe that you can succeed and leave no stone unturned to make it a reality.',
        author:'-Dr Roopleen'
    },
    {
        quote:'A story is a letter that the author writes to himself, to tell himself things that he would be unable to discover otherwise.',
        author:' -Carlos Ruiz Zafón'
    },
    {
        quote:'Authors like cats because they are such quiet, lovable, wise creatures, and cats like authors for the same reasons.',
        author:'-Robertson Davies'
    },
    {
        quote:'When male authors write love stories, the heroine tends to end up dead.',
        author:'-Susan Elizabeth Phillips'
    },
    {
        quote:'Quiet people have the loudest minds.',
        author:'-Stephen King'
    },
]

const quoteBtn=document.getElementById('quote-btn');
const quote=document.querySelector('.quote');
const author=document.querySelector('.author');


quoteBtn.addEventListener('click',()=>{
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerHTML=quotes[random].quote;
    author.innerHTML=quotes[random].author;

})