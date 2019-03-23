import './styles/main.scss' 
// console.log('I am the endry point!'); 

// const drumMachine = (()=>{
//     let self = {}
//     self.init = () => {
 
//         let drumPads = Array.from(document.querySelectorAll('.drum-pad'))
//         console.log(typeof drumPads);
//         console.log(drumPads);

//     }
//     return self
// })()

// drumMachine.init()

// DOM ready!
(() => { 
    
    //console.log("DOM ready!")
    //console.log(window)

    /*
    *   DATA STRUCTURING
    */
    const data = [
        {
            key: 'a',
            which: 65,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'z',
            which: 90,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'e',
            which: 69,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'q',
            which: 81,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 's',
            which: 83,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'd',
            which: 68,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'w',
            which: 87,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'x',
            which: 88,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
        {
            key: 'c',
            which: 67,
            drumSet: {
                name: '',
                audioUrl: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            pianoSet: {
                name: '',
                audioUrl: ''
            } 
        },
    ]
    

    /*
    *   WORKING WITH DATA
    */

    // Store keyboard keys allowed to be pressed from data array
    let dataKeysWich = data.map( element => element.which )

    // Play selected HTML audio tag
    const audioPlay = audio => {
     
        // rewind audio in case of multiple keydown event
        audio.currentTime = 0
        // play audio
        audio.play()
    }

    // *** TODO -> remove the function below
    // add or remove class to element closest parent
    const addRemoveClassToParrent = (child, choice, className)=> {
        let parent = child.closest("div")

        if (choice === 'add') {
            parent.classList.add(className)
            console.log(parent) // __DEBUG
            return 
        }
        if (choice === 'remove') {
            parent.classList.remove(className)
            console.log(parent) // __DEBUG
            return 
        }
    }

    // toogleClass
    // add or remove class to element closest parent 
    const toogleClass = (child, className) => {
        let parent = child.closest("div")

        if (!parent.classList.contains(className)) {
            parent.classList.add(className)
            // console.log('isActive ?',parent) // __DEBUG
        } else {
            parent.classList.remove(className)
            // console.log('isActive ?',parent) // __DEBUG
        }      
    }

    /*
    *   KEYBOARD ACTIONS
    */

    // keydown event listener
    window.addEventListener('keydown', event => {

        if(dataKeysWich.includes(event.which)){
            // get HTML audio tag
            let audio = document.getElementById(event.key.toUpperCase())
            // toogle isActive class on parent element
            toogleClass(audio, "isActive")
            // play audio
            audioPlay(audio)
        }
    })

    // keyup listener
    window.addEventListener('keyup', event => {

        if(dataKeysWich.includes(event.which)){
            // get HTML audio tag
            let audio = document.getElementById(event.key.toUpperCase())
            // toogle isActive class on parent element
            toogleClass(audio, "isActive")
        }
    })

})()