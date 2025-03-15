import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { translateTextToTamazight } from './Translator.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

document.querySelector('#app').innerHTML = `
      <div id="input-container"> 
        
            <h1>Tamazight Translator</h1>
            <form id="form" action="#" method="post">
              <div id="input-text" contenteditable="true" placeholder="Ktab hna b darija..."></div>
                <select id="dialect-select">
                    <option value="1">Khtar lahja</option>
                    <option value="2">Tashelhit</option>
                    <option value="3">Tarifit</option>
                    <option value="4">Atlas Tamazight</option>
                </select>
              <button id="translate-btn" type="submit" disabled>Translate</button>  
            </form>     
      
      </div>
      <div id="output-container">
            <h2>Translation:</h2>
            <div id="output-text"></div> 
      </div>
`;

translateTextToTamazight(document.querySelector('#translate-btn'))

//setupCounter(document.querySelector('#counter'))
