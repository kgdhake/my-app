function sayHello(){
    console.log("hello");
}
export default function button(){
    return(
        <div>
            <button onClick={sayHello}>Click me</button>
        </div>
    );
}