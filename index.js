        import React, { lazy,Suspense, useEffect, useState } from "react";
        import ReactDOM from "react-dom/client";
        import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
        import Header from "./src/Header";
        import Body from "./src/Body";
        import About from "./src/utils/About"
        import Contact from "./src/utils/Contact";
        import Error from "./src/Error";
        import RestaurantMenu from "./src/RestaurantMenu";
        import UserContext from "./src/utils/UserContext";
        //import Grocary from "./src/utils/Grocary";
        

        const Grocary = lazy(() => import("./src/utils/Grocary"));

        const AppLayout = () => {

            const [userInfo,setUserInfo]=useState();

        useEffect(()=>{
            const data = {
                name:"Ashokkumar"
            };
            setUserInfo(data.name);
        },[]);
            return(

                

                  <UserContext.Provider value={{loginUser:userInfo,setUserInfo}}>
                    <div className="app">
                        <Header/>
                        <Outlet/>
                    </div>   
                    </UserContext.Provider>  
            );
        };

        const AppRouter = createBrowserRouter([
            {
                
                path : "/",
                element : <AppLayout/>,
                children :[
                        {
                path : "/",
                element : <Body/>
            },
                    {
                path : "/About",
                element : <About/>
            },
            {
                path : "/Contact",
                element : <Contact/>
            },
            {
                path : "/grocary",
                element : <Suspense fallback={<h1>loading...</h1>}><Grocary/></Suspense>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            }
                ],
                errorElement:<Error/>
            }
        ]);
        const Root = ReactDOM.createRoot(document.getElementById("root"));
        Root.render(<RouterProvider router={AppRouter}/>);