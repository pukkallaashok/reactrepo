        import React from "react";
        import ReactDOM from "react-dom";
        
        const heading1 = React.createElement("h2",{},"Namaste From React!");
        const heading2 = React.createElement("h2",{},"Namaste From React!");
        const root1 = React.createElement("div",
        {
            id : "root1"
        }
        ,[heading1,heading2]);
        const Root = ReactDOM.createRoot(document.getElementById("root"));
        Root.render(root1);