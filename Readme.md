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

   Note: useState/state variables are used to manipulate data of functional component.So please create/declare and define initialisation of state variables at the top of component body.
   Never create useState hooks into if statement it creates inconsistency into our code. 

-useEffect().  
React renders UI first then it makes API calls and after that it fills API data onto component. 
Eg we're getting restaurant list from live swiggy API. We're loading restaurantList 1st if restaurantList.lenth  == 0 then we load Shiimer UI component at that moment react restaurantList state is initialised and we're making API call after making successful API call we fill data into restaurantList state with the help of setRestaurantList method.  

1. It is a hook same like useState hook. However, we use useState function/hook to initialize state variable useEffect used to interact with backend API. 
2. useEffect function takes 2 arguments given as below
  useEffect(()=>{}, [])
  i) 1st argument is callback function and 2nd arg is dependency array. 
3. After component rendering  this callback function is triggered. 
4. Everytime my component will get rendered useEffect hook will be called if there's no dependency array gibven only callback function is mandatory. 
5. If we provide empty array as dependency array to useEffect hook then the useEffect hook will be rendered on initial stage of component. After that we won't be able to see any rendering from dependency array. 
6. If something is provided to useEffect hook when dependency array changes then useEffect will get rendered. 
eg If the value of btnAuthState changes then only useEffect will be triggered.

const [btnAuthState,setBtnAuthState] = useState("Login")

<button onClick={()=> btnAuthState == "Login" ? setBtnAuthState("Logout"): setBtnAuthState("Login")} >{btnAuthState}</button>

useEffect(()=> {
  console.log("Authentication Status", btnAuthState)
},[btnAuthState])


7. If we don't provide anything as empty array to useEffect hook then useEffect hook will be called continuously. 


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



Finding the path React Router DOM
1. install react-router-dom 
2. import { createBrowserRouter,RouterProvider } from "react-router-dom";
-- createBrowserRouter is a function provided by react-router-dom to set/manipulate path for DOM. 
-- const appRouter = createBrowserRouter([
  {path:"/",element:<AppLayout/>},
  { path:'/about', element:<About/>}
  ]) 
3. RouterProvider is a component provided by react-router-dom. 
4. instead of rendering app component using root.render try to render RouterProvider component 

  RouterProvider component has a prop called router to which we pass the appRouter which is initialized by method createBrowerRouter function. 

  Before Routing
  root.render(<AppLayout />);
  After Routing 
  root.render(<RouterProvider router={appRouter}/>)

5. We've created Error.js just like page not found component. In some cases like wildcard route of angular routing we have an opportunity to throw/show error component. To implement this(wildcard route) kind of functionality we need to provide following code. 

{path:"/",element:<AppLayout/>, errorElement: <Errpr/>}

6. Out header component should be on top if we navigate to other pages like contact us or about us page. For that purpose we need to provide child routes in chirldren array given as below 

const appRouter = createBrowserRouter([
  {path:"/",
  element:<AppLayout/>
  children:[
    {path:'/about',element: </About/>}
    {path:'/contact',element: </Contact/>}
    
  ],
  errorElement:<Error/>
  }
]);



8. we have multiple pages like 
   i) http://localhost:1234/ ==> to show homepage with body comonent 
   ii) http://localhost:1234/about ==> to show about page 

  If we try to navigate to about page we'll get about us component without header(navbar) component. To solve/fix  this
  issue we have Outlet component provided by react-router-dom which is used to change child route behaviour accoring to condition as given below.  

  The outlet component will check all the child routes of appRouter instance. 

 eg If out current path is http:localhost:1234/ ==> render header component with body component
 If out current path is http:localhost:1234/about ==> render header component with about component. It means that the <Outlet/> component will be replaced with <About/> component.

  Eg 

  const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path:"/",element:<Body/>},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />,
  },
]);

9. react-router-dom provided us useRouteError hook to show/throw error in various cases like error code is 404 or 400. 
eg 

import {useRouteError} from "react-router-dom";

const err = useRouteError();

err.status ==> to show error status code (400/404)
err.statusText ==> to show error message 


10. In header component we've some links to route like about link to navigate to about page. For that navigation react-router-dom wwarns user to never use <a href=""></a> in react app. To fix this issue react-router-dom provided us Link component which works similar like anchor tag. 

i) <a href="/about"> About</a> ==> HTML way
ii) <Link to="/about"> About</Link> ==> provided by react-router-dom way 

Note: If we're using anchor tag the page will be reloaded. With the help of Link component page won't be reloaded/refreshed. 

11. Types of routing in react
i) Client Side routing ==> In this approach the component will be loaded/rendered as per user click. 
ii) Server Side Routing ==> It means we have index.html. Suppose we want to open about.html then it'll send a network call to backend reloads the whole page and re-renders the about.html.


12. useParams is a hook provided by react-router-dom to pass route parameter 
i) {path:"/restaurants/:resId",element:<RestaurantMenu/>} ==> resid is a parameter passed to RestaurantMenu component 
ii) <Link to={"/path/"+restaurant.id}> <Card/> <Link>  ==> link is a component provided by react-router-dom as same as anchored tag element. 
ii) import {useParams} from "react-router-dom";
iii) const {resId} = useParams(); 


Warning : swiggy live api is used into this code. Just allow cors to your port using cors chrome extension. 


Episode 8 : Let's get classy 
There are two types of components in react ecosystem 
i) Class based component ==> It's just a simple JS Class which extends React.Component. It has render method which returns some piece of JSX. We need to use/insert super(props) into constructor(props)  of the class components because when a class components are used constructor is called and props are initialized.
setState method is used to set state value in class component. There is another method in class based component componentDidMount() wich will be invoked after finishing code execution of render method. 

Important Interview Question ==> Suppose we have two components Parent and child component both components have 3 methods constructor, render and com ponentDidMount. Then the execution flow will be given as below

Parent(Constructor) ==> Parent(render) ==> Child(Constructor)==> Child(render) ==> Child(ComponentDidMount) ==> Parent(ComponentDidMount)




componentDidMount method is used to make API calls. Just like useEffect hook we renders the component after rendiering the data we make API call. 



React lifecycle methods 
- for more info checkout the link given below 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

When we are mounting component we have two phases called render phase and commit phase 

When we call a class component first of all the constructor will be rendered then render method will be mounted and the DOM will check whether is there any component is called or not. 

i) If class component declaration is present then the constructor of that component is rendered render method will be executed. After child component's render method will be called then componentDidMount and after all componentDidMount method of parent component will be executed. 

ii) It not then componentDidMount method will be executed in the commit phase. 

iii) After render phase execution the code of commit phase is executed called componentDidMount method. In this commit phase the DOM will be manipulated which is too much expensive wrt time. 

iv) In class based components after every render componentDidUpdate() lifecycle method is invoked. In that trend of class based components we had parameters with componentDidUpdate(prevProps,prevStat) 

v) componentWillUnmount() use case is when we're leaving the page this method will be invoked. In some cases we need to clear some things/data from UI at that time this method is used.
Eg 
we have two components profile is a parent component and userAvtar is child component and we have setInterval method in child component's render method if we try to switch tabs at that moment also the setInterval function will be executed. Hence, componentWillUnmount method is used. So when we change the component setInterval execution will be stopped.  


class based component 
==> componentDidUpdate(prevProps,prevState){
  if(this.state.count != prevState.count){
    <!-- Do Something -->
  }
}

functional component
==> useEffect(()=>{
  <!-- Do something -->
},[count])

i) useEffect hook of functional component works same like componentDidMount mwthod of class component. But if we want to use componentWillUnmount method we need to use return a callback function from useEffect hook. Eg 

eg. 
Suppose we have a component 

const About = () => {

  useEffect(() => {
  console.log("Component mounted");

  const timer = setInterval(() => {
    console.log("About component");
  }, 1000);

  return () => {
    console.log("Component unmounted");
    clearInterval(timer);
  };
}, []);

  console.log("render")

}


Warning : In react 16 we used class component and componentDidMount works same like useEffect for API call/rendering data from backend. But we use async componentDidMount != useEffect(async ()=> console.log("Callback"), [])

ii) Functional Component ==> It's a JS Function which return some piece of JSX. Hooks are used to implement states. 


