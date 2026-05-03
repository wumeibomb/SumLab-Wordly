// Search functionality, display search results for the word
// audio playback fro pronounciation???
//fetch data from api, pase and display fetched, unser input and events


async function fetchWORD() {
    try {
        const tryout = document.getElementById("wordsearch").value.toLowerCase()
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${tryout}`)
        const data = await response.json()
        //console.log(data)

        //data extraction???
        const world = data[0].word
        const wordMeaning = data[0].meanings[0].definitions[0].definition
        const audio = data[0].phonetics[0].audio //only american pronounciation
        const exampleusage = data[0].meanings[2].definitions[1].example
        const exampleusage2 = data[0].meanings[1].definitions[0].example
        const moredefs1 = ""
        const moredefs2 = ""

        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example = document.getElementById("example").innerHTML =  exampleusage 
    const Example2 = document.getElementById()
        if(exampleusage == undefined || exampleusage == ""){
                 Example = document.getElementById("example").innerHTML =  "<h2> Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h2>" 
                 return
        }
        const renderwordDetails = (word) => {
    return `
    <div id = "wordContainer" class = "wordCont">
     <div class = "wordDesc">
        <h3> ${SearchedWord} </h3>
        <h2> ${wordDesc} </h2>
        <audio controls>
            <source src ="${AUDIO}" type="audio/mpeg">
        </audio>
     </div>
     <div id = "morecontent">
        <button id = "moremore"> more definitions</button>
        <h3 id="${Example}">bruh </h3>
        </div>
     `
     
}
    }
    catch (error){
        console.error("ITS ME!", error)
    }

}


