import defaultSource from './server.html'
import tabPreset from './tabPreset.html'
import hamburgerPreset from './hamburgerPreset.html'

const presets = {
    empty: '',
    tabs: tabPreset,
    hamburger: hamburgerPreset
}

const iframe = document.querySelector('iframe')

const editor = window.editor = CodeMirror(document.querySelector('#editor'), {
    lineNumbers: true,
    lineWrapping: true,
    styleActiveLine: true,
    matchBrackets: true,
    lint: true,
    gutters: ["CodeMirror-lint-markers"],
    mode: "text/html"
})
editor.setSize("100%", "100%")

const getQuery = () => new URLSearchParams(location.href.includes('?') ? location.href.substr(location.href.indexOf('?')) : '')

const query = getQuery()
const starterInput = query.has('code') ? query.get('code') :
    localStorage.getItem('userInput') != null ? localStorage.getItem('userInput') :
    tabPreset
editor.setValue(starterInput)
iframe.srcdoc = defaultSource
    .replace('[CONTENT]', starterInput)

document.querySelector('button.run').addEventListener('click', () => {
    iframe.srcdoc = defaultSource.replace('[CONTENT]', editor.getValue())
})

document.querySelector('button.share').addEventListener('click', () => {
    const query = getQuery()
    query.set('code', editor.getValue())
    alert("Sharable URL now in address bar")
    location.assign(location.protocol + location.pathname + '?' + query.toString())
}, { passive: true })

const presetSelect = document.querySelector('select.preset')
presetSelect.addEventListener('change', () => {
    editor.setValue(presets[presetSelect.value])
    iframe.srcdoc = defaultSource.replace('[CONTENT]', editor.getValue())
}, { passive: true })

document.querySelector('button.toggleView').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('hidePreview')
})