import  fetchApi  from "./request";
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const ul = document.querySelector('meaning')

fetchApi(url).then((items) => updateUI(items))


export function updateUI(data) {
  const container = document.querySelector(".info")
  container.innerHTML = ""
  
    const { word, phonetics, meanings, sourceUrls, } = data[0]
    
    const div = document.createElement("div")
    div.classList.add("letters")
    div.innerHTML = `
    <div class= "wrapper">
    <h1 class="word">${word}</h1>
    <div class="main__play"> 
      <svg class="playBtn" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="37.5" cy="37.5" r="37.5" fill="#A445ED"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29 27V48L50 37.5L29 27Z" fill="white"/>
      </svg>
    </div>
    </div>
    <h3 class="transcript">${phonetics[1].text}</h3>
    <h3 class="noun">
    noun
    </h3>
  
    <ul class="meaning">Meaning
    
      
    </ul>
  
   <div class="syn">
    <h3 class="synonyms">Synonyms: </h3>
    <a class="synonym">
    
    </a>
  </div>
    <h3 class="verb">Verb</h3>
    <ul class="meaning">Meaning 
    
        <span></span></li>
  
    </ul>
   
  
    <a href="${sourceUrls}" class="source">Sourse: ${sourceUrls}</a>
                                                
                                                  `

    container.appendChild(div)



  const Nmeaning = document.querySelector('.meaning');
  const meaning = document.querySelectorAll('.meaning')[1];
  const synonymsLink = document.querySelector('.synonym');
  meanings[0].definitions.forEach(e => {
      const div = document.createElement('div');
      div.innerHTML = `
         
          <p class="info__text--desc">${e.definition}</p>
      `
      Nmeaning.appendChild(div)
  });

  meanings[1].definitions.forEach(e => {
      const div = document.createElement('div');
      div.innerHTML = `
        
          <p class="info__text--desc">“${e.definition}”</p>
      `
      meaning.appendChild(div)
  });

  meanings[0].synonyms.forEach(e => {
      synonymsLink.innerHTML += `
          ${e ? e : 'No synonyms'}
      `
  });
  const playBtn = document.querySelector('.playBtn')
  playBtn.addEventListener('click', () => {
        let audio = new Audio(phonetics[0].audio)
        audio.play()
    })

}

export default updateUI;