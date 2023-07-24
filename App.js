// this React.createElement return any React element which is nothing but a object

const headingOfReact = React.createElement('h2', { id: "heading" }, "This is the Paragraph from React Appplication");
const rootApp = ReactDOM.createRoot(document.getElementById('root'));

const elembt = document.getElementById('root');
// this render method convert the object into HTML Node
// rootApp.render(headingOfReact)

// this return object and not HTML node
console.log(
    "headingOfReact", headingOfReact
);

{/* <div id= "parent">

    <div id = "child">
        <h1>I am h1 tag in child</h1>
        // if we want to add multiple children then
        <h2>this is h2 tag</h2>
    </div>
    <div id= "child2">
        <h1>I am h1 tag in child</h1>
        // if we want to add multiple children then
        <h2>this is h2 tag</h2>
    </div>
</div> */}
// how to create structure as above

// this nestedNode (react element )is alway a object and not an HTML element
const nestedNode = React.createElement("div", { id: "parent" },
    [
        React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "I am h1 tag in child"),
    React.createElement('h2',{},"I am h2 tag in child")]
        
        ),
        React.createElement('div', { id: "child2" },
        [React.createElement('h1', {}, "I am h1 tag in child"),
    React.createElement('h2',{},"I am h2 tag in child")]
        
    )
   ]) 
rootApp.render(nestedNode);



// const App = () => {
//     return (
//         <>
//             <h1>Helli</h1>
//         </>
//     )
// }

// elembt.render(App);
