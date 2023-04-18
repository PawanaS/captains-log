const React = require("react");
const DefaultLayout = require('../layout/Default');

function Index(props) {
  const { logs } = props;

  return (
    <DefaultLayout title="Logs Index Page">
      <nav>
        <a href="/logs/new">Create a New Log</a>
      </nav>
      
      <h1>Index Page</h1>

      <ul>
        {fruits.map((logs, i) => {
          return (
            <li key={logs._id}>
              The <a href={`/logs/${logs._id}`}>{logs.title}</a> name is {logs.entry} {logs.shipIsBroken ? "is broken" : "not broken"}
                <a href={`/logs/${logs._id}/edit`}>Edit</a>

              <form method="POST" action={`/logs/${logs._id}?_method=DELETE`}>
                <input type="submit" value="DELETE"/>
              </form>


            </li>
          );
        })}
      </ul>

    </DefaultLayout>
  );
}

module.exports = Index;







