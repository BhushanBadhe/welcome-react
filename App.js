import React from "react";
import ReactDOM from "react-dom/client";
{
  /* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */
}

// const parent = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//     [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
//     )
// )

// JSX ==> Javascript XML
const JsxHeadingElement = "jsxHeading is title of this topic";

// React Component
// Class Based Components

// Functional Component ===> It's latest way to code in react. It's just a function. Just name the functional component with capital letter otherwise you'll get error

const TitleComponent = () =>  <h1>TitleComponent here</h1>
const spanTag = <span>Span Tag here</span>
const HeaderComponent = () => (
  <div className="container">
    {spanTag}
    {TitleComponent()}
    <h1>{JsxHeadingElement}</h1>
    <h1 id="heading">Header</h1>
  </div>
);

const heading = React.createElement("h1", { id: "heading" }, "React is here");
// console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
