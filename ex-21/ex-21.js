window.onload = function () {
    sayRandom()
}

const quotation = [
    {
        quote: "'Do not pity the dead, Harry. Pity the living, and, above all those who live without love'",
        say: "Albus Dumbledore"
    },
    {
        quote: "'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'",
        say: "Albus Dumbledore"
    },
    {
        quote: "'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.'",
        say: "Sirius Black"
    },
    {
        quote: "'It does not do to dwell on dreams and forget to live.'",
        say: "Albus Dumbledore"
    },
    {
        quote: "'Never trust anything that can think for itself if you cant see where it keeps its brain.'",
        say: "Arthur Weasley"
    },
    {
        quote: "'It matters not what someone is born, but what they grow to be.'",
        say: "Albus Dumbledore"
    },
    {
        quote: "'Every human life is worth the same, and worth saving.'",
        say: "Kingsley Shacklebolt"
    },
    {
        quote: "'To the well-organized mind, death is but the next great adventure.'",
        say: "Albus Dumbledore"
    },
    {
        quote: "'Yeah, size is no guarantee of power'",
        say: "George Weasley"
    },
    {
        quote: "'Have a biscuit, Potter.'",
        say: "Minerva McGonagall"
    },
    {
        quote: "'I am a wizard, not a baboon brandishing a stick.'",
        say: "Seamus Finnigan"
    },]
function sayRandom() {
    const index = Math.floor(Math.random() * quotation.length);
    const say = document.querySelector("#id_h3");
    const quote = document.querySelector("#id_h2");
    say.innerHTML = quotation[index].say;
    quote.innerHTML = quotation[index].quote;
    return;
}