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



===> Props

1.Props stands for properties which we send to component. 
2.Functional Component is just a functionn in react. We pass some arguments to functions called Props. 
3.Passing a prop to a functional component is same as passing an argument to a function. 
4. When you try to pass dynamic data to a component we need to pass a prop.
5. const RestaurantCard = ({restName,cuisine}) => This is called destructusing on fly. 
6. When we use map or filter in JS we need to use key as prop and share the index. If we don't pass id/key as prop then reactdom will render all the elements after adding a single element to the array of object. To overcome from this issue we need to pass key as a prop. 
7. React doesn't recommend to use index as key. 



Note - 
Swiggy, Zomato and Uber has done config driven UI means our UI is driven based on config. Different locations have different offer for various restaurants. 


Food-platform
// Header
// --> Logo
// --> Nav Items
// Body 
// --> SearchBar 
// --> RestaurantContainer 
// -----> ReastaurantCard
// ======>Img
// ======>Name of restaurant, Star, cuisine, delivery time, etc   
// Footer
// --> Copyright
// --> Links 
// --> Address
// ---> Contact



==Imports and Exports
Two types of export and import 

- Default Export and Import 
export default component_name
import component_name from "path"


- Named Export and Import 
export const Header = () =>
import {Component_name} from "path"


Hooks 
1. They're normal JS functions written by fb developer. 
2. Written inside react library. 
3. Hook is nothing a normal JS Function which is given by react. It has it's own use cases
4. Examples 

- useState()--> 
   Used to create superpowerful react variables. 
   You've to implement named import for useState hook.   
   It is used to maintain the local state of the component. 

   const [listOfRestaurant,setListOfRestaurant] = useState([initial-value])
   
   a. listOfRestaurant ==> identifier/name of react state variable. 
   b. setListOfRestaurant ==> callback function to manipulate state variable. 
   c. useState() ==> is a function which takes initial value as a parameter i.e. null,0 or anything.
   d. whenever state variable updates component will be rerendered. 

-useEffect().  
1. It is a hook same like useState hook. However, we use useState function/hook to initialize state variable useEffect used to interact with backend API. 
2. useEffect function takes 2 arguments given as below
  useEffect(()=>{}, [])
  i) 1st argument is callback function and 2nd arg is dependency array. 
3. After component rendering  this callback function is triggered. 


- React Fibre
React uses reconciliation algorithm known as react fibre. This react fibre creates a virtual DOM to re-render the component. It doesn't touch the actual DOM. 
Why react is fast ? 
- Because of react fibre if any change is detected in virtual DOM it'll re-render that particular component. 
For more info - https://github.com/acdlite/react-fiber-architecture


- Monolith Archietecture 
1. There is a single project consist of whole set of functionality provided by the project eg amazon is using monolith archietecture then it should have a project called amazon under that should contain various apps 
-- UI
-- SMS
-- SMTP 
-- API
-- Auth 
-- DB 

- Microservice architecture 
In this arch we have different services for diff jobs like Backend service, UI Service, Auth Service, SMS Service, SMTP Services, DB Services all this services forms a big app. This is known as separation of concern. 



