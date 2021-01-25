import React from "react";

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <img alt={props.title} src={props.image} />
      <h4>{props.technology}</h4>
    </div>
  );
}

function ToolsList() {
  return (
    <div>
      <Card
        title="Nodejs"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png"
        technology="Server, Javascript"
      />
      <Card
        title="ReactJS"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        technology="Client, Javascript, JSX"
      />
      <Card
        title="PostgreSQL"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
        technology="Server, RDBMS, SQL"
      />
    </div>
  );
}

export default ToolsList;
