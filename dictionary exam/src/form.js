import fetchApi from "./request"
import { updateUI } from "./createWord"
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const input = document.getElementById('input')
const form = document.querySelector('.search-form')



form.addEventListener("submit", (e)=>{
  e.preventDefault()
  console.log(input.value)
  fetchApi(`${url}${input.value}`).then(items => updateUI(items))
})