const React = require("react");

function Show(props){
const {logs}=props;
return(

    <div>
        <nav>
        <a href="/logs">Home</a>
      </nav>
        <h1> info about ship</h1>
        <p>The {logs.title} name is {logs.entry} {logs.shipIsBroken ? "is broken":"not broken"} created at:{logs.createdAt.toString()}</p>
    </div>
)

}

module.exports = Show;