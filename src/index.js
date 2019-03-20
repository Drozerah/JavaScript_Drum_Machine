import './styles/main.scss' 
console.log('I am the endry point!'); 

const drumMachine = (()=>{
    let self = {}
    self.init = () => {
 
        let drumPads = Array.from(document.querySelectorAll('.drum-pad'))
        console.log(typeof drumPads);
        console.log(drumPads);

    }
    return self
})()

drumMachine.init()
