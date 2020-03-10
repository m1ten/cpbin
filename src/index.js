import defaultSource from './server.html'
import lz from 'lz-string'

const lz = re

const presets = {
    empty: '',
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

editor.on('change', () => {
    localStorage.setItem('userInput', editor.getValue())
})

const getQuery = () => new URLSearchParams(location.href.includes('?') ? location.href.substr(location.href.indexOf('?')) : '')

const query = getQuery()
let starterInput = localStorage.getItem('userInput') != null ? localStorage.getItem('userInput') : tabPreset
if (query.has('code')) {
    starterInput = query.get('code')
}
if (query.has('lzcode')) {
    starterInput = lz.decompressFromEncodedURIComponent(query.get('!code'))
}

editor.setValue(starterInput)
iframe.srcdoc = defaultSource
    .replace('[CONTENT]', starterInput)

document.querySelector('button.run').addEventListener('click', () => {
    iframe.srcdoc = defaultSource.replace('[CONTENT]', editor.getValue())
})

document.querySelector('button.share').addEventListener('click', () => {
    const query = getQuery()
    query.set('!code', lz.compressToEncodedURIComponent(editor.getValue()))
    alert("URL updated.")
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
