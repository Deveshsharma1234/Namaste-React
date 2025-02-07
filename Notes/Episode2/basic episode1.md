```markdown
````
# React Button Click Example

This example demonstrates how to toggle between two different React elements when a button is clicked.

## JavaScript Code

```javascript
let clicked = true;
var btn = function() {
    console.log("clicked");
    if (clicked) {
        root.render(parent);
        console.log(document.getElementById(`root`));
    }
    if (!clicked) {
        root.render(heading);
        console.log(document.getElementById(`root`));
    }
    clicked = !clicked;
}

const parent = React.createElement(`div`, { id: "parent" }, 
    React.createElement(`div`, { id: "child" }, [
        React.createElement(`h1`, { id: `n` }, `Hello, Dojo! from nested parent div`),
        React.createElement(`h2`, { id: `n` }, `Things I need to do:`),
        React.createElement(`ul`, { id: `n` }, [
            React.createElement(`li`, { id: `n` }, `Learn React`),
            React.createElement(`li`, { id: `n` }, `Climb Mt. Everest`),
            React.createElement(`li`, { id: `n` }, `Run a marathon`),
            React.createElement(`li`, { id: `n` }, `Feed the dogs`)
        ]),
        React.createElement(`h1`, { id: `n` }, `Hello, Dojo! from nested parent div`)
    ])
);

const button = React.createElement(`button`, { id: "btn", onClick: btn }, `click me`);
const root2 = ReactDOM.createRoot(document.getElementById(`root2`));

const heading = React.createElement(`h1`, { id: "heading" }, `Hello, Dojo!`);
const root = ReactDOM.createRoot(document.getElementById(`root`));

root2.render(button);
console.log(document.getElementById(`root`));
```

## HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="root">Devesh is here</h1>
    <div id="root2"></div>

    <!-- <script>
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Hello React';
        const root = document.getElementById('root');
        root.appendChild(h1);
    </script> -->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>  
    <script src="script.js"></script>
</body>
</html>
```

## Theory Notes

- **React.createElement**: This function is used to create a React element. It takes three arguments: the type of the element, the properties of the element, and the children of the element.
- **ReactDOM.createRoot**: This function is used to create a root for rendering React elements. It takes a DOM element as an argument.
- **root.render**: This function is used to render a React element into the root.
- **Event Handling**: The `onClick` property is used to handle click events on the button. When the button is clicked, the `btn` function is executed.
- **Conditional Rendering**: The `btn` function toggles the rendering between two different React elements (`parent` and `heading`) based on the `clicked` state.
```