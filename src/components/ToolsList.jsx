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
      <h3>ReactJS</h3>
      <img
        alt="ReactJS"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      />
      <h4>Client, Javascript, JSX</h4>
      <h3>PostgreSQL</h3>
      <img
        alt="PostgreSQL"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
      />
      <h4>Server, RDBMS, SQL</h4>
    </div>
  );
}

export default ToolsList;
