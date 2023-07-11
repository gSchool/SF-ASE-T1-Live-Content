// What is variable?
// A piece data
// storage for data
// Mutable by default
// Named Piece of Memory
// They're scoped, and as result of that: They have a lifetime.
//  A variable, is a named piece of memory, that holds data, that may or may not be mutable, 
//  and exists for a specific period of time/execution.


let greeter = (greetingName) => {
        let greeting = "Hello"
        let text = `${greeting}, ${greetingName}`
        return text;
    }
    
    let text = greeter("Jenny");
    console.log(text);
