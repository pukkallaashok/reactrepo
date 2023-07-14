        import React, { createElement } from "react";
        import ReactDOM from "react-dom/client";
        
        const heading = React.createElement("h1",{id:"header"},"Namaste React🚀");
        const Root = ReactDOM.createRoot(document.getElementById("root"));
        /*we can see the difference clearly between line 4,5 with 7 &
         if we write more than 1 line code we should put them in "()"*/
        const jsxheading= (<h1 id="header" className="class">
            Namaste React using JSX🚀
            </h1>);
        //React Functional components
        const HeadingComponent = () => {
            return <h1>Functional component using return</h1>
        } 
        const HeadingComponent2 = () => <h1>Functional component without return</h1>
    
        //also this is the component composition  
        const HeadingComponent3 = () => (
            <React.Fragment>
                <input type="search" id="bar" placeholder="Google it"/>
                <button id="button">search</button>
                <div id="container">
                    {jsxheading}
                    <h1 className="comp">
                        Functional component without return, in multiple lines
                    </h1>
                </div>
                <div id="container2">
                    <p>
                        Functional component : It is a normal JS function that can return the JSX code or React element. 
                    </p>
                </div>
            </React.Fragment>
        )

        Root.render(<HeadingComponent3/>);