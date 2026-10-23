import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

const form = document.querySelector('@form')
form.addEventListener('submit', e =>{
    e.preventDefault()

    const prompt = document.querySelector('#prompt').value

    if(prompt.trim() === ''){
        alert('La consulta no puede ir vacía')
        return
    }

    const result = streamText({
        model: openrouter('google/gemma-4-26b-a4b-it:free'),
        // model: openrouter('recursive/flint-v1.0:free'),
        // model: openrouter('baseten/mammoth-1:free'),
        // model: openrouter('inception/mercury-decide:free'),
        // model: openrouter('liquid/lfm-2.5-embedding-350m:free'),
        prompt
    })

    for await (const text of result.textStream){
        
    }
})