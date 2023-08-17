React Element  = Javascript Object  ===> Converted into HTML ==>  Which is understood by browser.


React has createElement method which takes 3 parameters called 

React.createElement(type, props, children)

type ==> tag type (h1,div,h2 and span etc)
props ==> It is an object used to set propertyname like id of element. 
childrent ==> What should the content into the React element. 


ReactDOM has createRoot method to create root element for manipulating HTML page using virtual DOM. 
ReactDOM has render method used to render react element onto Index.html


npm init ==> to initialize package.json 
npm i -D parcel ==> to install parcel
hit command ==> npx parcel index.html to run app 