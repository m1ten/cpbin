import defaultSource from './server.html'
import tabPreset from './tabPreset.html'

const presets = {
    empty: '',
    tabs: tabPreset
}

const input = document.querySelector('textarea')
const iframe = document.querySelector('iframe')
const errorContainer = document.querySelector('.footer')

function debounce(ms, fn) {
    let timeout = null
    let savedArgs

    return function (...args) {
        savedArgs = args

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null
            fn(...savedArgs)
        }, ms)
    }
}

const editor = ace.edit("editor")
editor.setTheme("ace/theme/github")
editor.session.setMode("ace/mode/html")

const session = editor.getSession()
session.setUseWrapMode(true)
session.on("changeAnnotation", function () {
    const annotations = session.getAnnotations()
    const filtered = annotations.filter(a => !a.text.includes('<!DOCTYPE html>'))

    if (annotations.length != filtered.length) {
        session.setAnnotations(filtered)
    }
});

editor.on('change', debounce(1000, function () {
    iframe.srcdoc = defaultSource
        .replace('[CONTENT]', editor.getValue())

    localStorage.setItem('userInput', editor.getValue())
}))

const getQuery = () => new URLSearchParams(location.href.includes('?') ? location.href.substr(location.href.indexOf('?')) : '')

const query = getQuery()
const starterInput = query.has('code') ? query.get('code') :
    localStorage.getItem('userInput') != null ? localStorage.getItem('userInput') :
    tabPreset
editor.setValue(starterInput)
iframe.srcdoc = defaultSource
    .replace('[CONTENT]', starterInput)


document.querySelector('button.share').addEventListener('click', () => {
    const query = getQuery()
    query.set('code', editor.getValue())
    alert("Sharable URL now in address bar")
    location.assign(location.protocol + location.pathname + '?' + query.toString())
}, { passive: true })

const presetSelect = document.querySelector('select.preset')
presetSelect.addEventListener('change', () => {
    editor.setValue(presets[presetSelect.value])
}, { passive: true })

document.querySelector('button.toggleView').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('hidePreview')
})