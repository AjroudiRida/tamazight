import {GoogleGenerativeAI} from "@google/generative-ai";
import dotenv from 'dotenv';


export function translateTextToTamazight(element) {

    const form = document.querySelector('#form');
    const inputTextElement = document.querySelector('#input-text');
    const dialectSelectElement = document.querySelector('#dialect-select');
    const translateButtonElement = document.querySelector('#translate-btn');

    const validateForm = () => {
        const textIsValid = inputTextElement.innerText.trim() !== '';
        const dialectIsValid = dialectSelectElement.value !== '1';
        translateButtonElement.disabled = !(textIsValid && dialectIsValid);
        console.log(inputTextElement.innerText.trim());
    }

    inputTextElement.addEventListener('input', validateForm);
    dialectSelectElement.addEventListener('change', validateForm);
    form.addEventListener('submit', async(e) => {
        e.preventDefault();
        const dialectText = dialectSelectElement.options[dialectSelectElement.selectedIndex].text;
        const promptText = `${inputTextElement.innerText}, dialect: ${dialectText}`;


        validateForm();
        console.log(promptText);
        const inputText = "Translate "+inputTextElement.innerText.trim() + ", Translate your response to Moroccan darija";
        console.log(inputText);
        if (inputText)
        {
            await Translate(promptText);
            inputTextElement.value = '';
            validateForm();
        }
    });
}


async function Translate(inputText) {

    const genAI = new GoogleGenerativeAI(`${import.meta.env.VITE_GEMINI_API_KEY}`);
    const model = genAI.getGenerativeModel(
        {
            model: "gemini-2.0-flash",
            systemInstruction: `
                Act as a professional translator specializing in Moroccan languages. Your task is to translate text from Moroccan Darija (Arabic dialect) to Moroccan Tamazight (Berber). Your entire explanation should be in darija . Follow these guidelines:

                Prioritize accuracy: Ensure translations retain the original meaning, including idioms, proverbs, or culturally specific phrases. If no direct equivalent exists, provide the closest match and add a footnote explaining the cultural context.
                
                Include transliteration: Alongside the Tamazight script (Tifinagh), provide a Latin-alphabet transliteration for accessibility.
                
                Flag regional variations: Highlight any terms/phrases that may differ significantly across Tamazight dialects.
                
                Explain ambiguities: If the Darija input is unclear, note possible interpretations.          
                
                Example workflow:
                
                Input (Darija): "شنو كاين جديد؟"
                
                Output (Tamazight):
                
                Tifinagh: ⵛⵏⵓ ⴽⴰⵢⵏ ⵏⵓⴷⵉⵏ؟
                
                Transliteration: "Mani illa ljadid?"
            `,
        });

    const message = [
        {
            role: 'user',
            parts: [
                {
                    text: inputText,
                }
            ],
        }
    ]
    const result = await model.generateContent({
        contents: message,
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.1,
        }
    });

    document.querySelector('#output-text').textContent = result.response.text();
    //console.log(result.response.text());
}

