// Search functionality, display search results for the word
// audio playback for pronounciation???
//fetch data from api, parse and display fetched, user input and events


async function fetchWORD() {
    try {
        const tryout = document.getElementById("wordsearch").value
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${tryout}`)
        const data = await response.json()
        //console.log(data)

        //data extraction???
        const world = data[0].word
        const wordMeaning = data[0].meanings[0].definitions[0].definition
        const audio = data[0].phonetics[0].audio //only american pronounciation
        const exampleusage = data[0].meanings[0].definitions[0].example
        const exampleusage2 = data[0].meanings[1].definitions[0].example
        const exampleusage3 = data[0].meanings[2].definitions[0].example

        if(exampleusage == undefined ){
        const Example = document.getElementById("example").innerHTML =  "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = exampleusage2 
        const Example3 = document.getElementById("example3").innerHTML =  exampleusage3

        }
        else if (exampleusage2 == undefined) {
        const Example = document.getElementById("example").innerHTML =  exampleusage 
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
      const Example3 = document.getElementById("example3").innerHTML = exampleusage3 
        }
        // words like cute and dream aren't working correctly, I'm not sure why the else-if functions aren't applying to them

     if (exampleusage3 == undefined) {
        const Example = document.getElementById("example").innerHTML =  exampleusage 
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = exampleusage2 
      const Example3 = document.getElementById("example3").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        }

        else if (exampleusage == undefined && exampleusage2 == undefined) {
        const Example = document.getElementById("example").innerHTML =  "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        const Example3 = document.getElementById("example3").innerHTML = exampleusage3 
         }
        
        else if (exampleusage2 == undefined) {
        const Example = document.getElementById("example").innerHTML =  exampleusage 
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        const Example3 = document.getElementById("example3").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        }
        else if (exampleusage == undefined && exampleusage2 == undefined && exampleusage3 == undefined){
        const Example = document.getElementById("example").innerHTML =  "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>"
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>" 
        const Example3 = document.getElementById("example2").innerHTML = "<h3>Not available ᨳ𐔌՞҂ ˕ ֊՞𐦯ᜊ </h3>" 

        }
        else {
        const Example = document.getElementById("example").innerHTML =  exampleusage
        const SearchedWord = document.getElementById("SearchedWord").innerHTML = world
        const wordDesc = document.getElementById("wordDesc").innerHTML = wordMeaning
        const AUDIO = document.getElementById("audio").src = audio
        const Example2 = document.getElementById("example2").innerHTML = exampleusage2
        const Example3 = document.getElementById("example3").innerHTML = exampleusage3
        }
}
    catch (error){
        console.error("ERROR FOUNDDDD", error)
    }
    
}

