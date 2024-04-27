// message2 is created with template literals
const greetings = (name) =>{
    const message = 'Hello ' + name + " " + 'welcome here' 
    const message2 = `Hello ${name}, welcome here`
    console.log(message , message2)
}

export const greeting2 = (name) =>{
    const message2 = `Hello ${name}, welcome here again`
    console.log(message2)
}

export default greetings;
// here export default means we can import it with any names we want
// just export means we have to import with exact this name using {}