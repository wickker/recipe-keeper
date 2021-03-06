var React = require("react");

class DeleteRecipe extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
          />
        </head>
        <body>
          <div className="container">
            <div className="row">
              <div className="col mt-5">
                
                <h4>Your recipe has been successfully deleted!</h4>
                <br></br>
                <form method="GET" action="/">
                  <button type="submit" className="btn btn-primary">Return To Home Page</button>
                </form>

              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = DeleteRecipe;
