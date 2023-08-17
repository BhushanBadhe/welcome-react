Episode 1 - 
React Element  = Javascript Object  ===> Converted into HTML ==>  Which is understood by browser.


React has createElement method which takes 3 parameters called 

React.createElement(type, props, children)

type ==> tag type (h1,div,h2 and span etc)
props ==> It is an object used to set propertyname like id of element. 
childrent ==> What should the content into the React element. 


ReactDOM has createRoot method to create root element for manipulating HTML page using virtual DOM. 
ReactDOM has render method used to render react element onto Index.html.


Session(Episode) 2 -
1. npm is a standard repository of node packages. 

npm init command is used to create package.json file 

package.json file is dependency file which contains standard node packages. 

Dependencies are most important package (called bundler). 

bundler basically bundles our app means packages our app so we can shift our app to production. 

webpack, parcel and vite are the example of bundlers. 


To install dependency we should hit command ==> npm install parcel. 



*=====> JSX <======*
JSX stands for javascript and XML 
JSX made our life easy by replacing React.createElement functionality. 

Eg 
const jsxHeading = <h1>JSX Heading here </h1>

if we want to implement JSX  dynamically or run JS code then we need to wrap it into curly braces. 

3 ways to call component using JSX 
Eg 
const TitleComponent = () => <p>Title Component here</p>

1. {TitleComponent()}
2. <TitleComponent/>
3. <TitleComponent><TitleComponent/>