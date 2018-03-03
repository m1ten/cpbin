import defaultSource from './server.html'
import defaultUserInput from './user_input.html'

const input = document.querySelector('textarea')
const iframe = document.querySelector('iframe')

// http://stackoverflow.com/questions/11076975/insert-text-into-textarea-at-cursor-position-javascript

function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
    }
}

function debounce (ms, fn) {
    let timeout = null
    let savedArgs

    return function(...args) {
        savedArgs = args

        clearTimeout(timeout)
        timeout = setTimeout(() => {
            timeout = null
            fn(...savedArgs)
        }, ms)
    }
}

input.addEventListener('input', debounce(1000, function () {
    iframe.srcdoc = defaultSource
        .replace('[CONTENT]', input.value)

    localStorage.setItem('userInput', input.value)
}))

input.addEventListener('keydown', function (event) {
    if (event.key != "Tab") return

    event.preventDefault()
    insertAtCursor(input, '  ')
})

const starterInput = localStorage.getItem('userInput') || defaultUserInput
input.value = starterInput
iframe.srcdoc = defaultSource
    .replace('[CONTENT]', starterInput)