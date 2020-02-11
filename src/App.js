import React, { useContext } from "react";
import About from "./About";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeContext, HomeProvider } from "./HomeContext";
import styled from "styled-components";

const BodyDisplay = styled.div`
  text-align: right;
  margin-right: 5px;
`;
const BodyMessage = styled.div`
  width: 300px;
  height: 300px;
  position: fixed;
  right: 3%;
  top: 35%;
  background-color: white;
  border: solid 2px;
  z-index: 1;
  padding-left: 5px;
  padding-right: 5px;
  text-align: justify;
  overflow-y: auto;
`;
const BodyContainer = styled.div`
  postion: relative;
`;

function App() {
  return (
    <HomeProvider>
      <Router>
        <div className="App">
          <Nav />
          <BodyContainer>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" component={HomePage} />
            </Switch>
          </BodyContainer>
        </div>
      </Router>
    </HomeProvider>
  );
}

function HomePage() {
  const [post] = useContext(HomeContext);
  return (
    <div>
      {<h1>TITLES</h1>}
      <BodyDisplay>
        <Route path="/:postId" component={Body} />
      </BodyDisplay>
      <hr />
      {post.map(showpost => (
        <div>
          <Link
            key={showpost.id}
            style={{ textDecoration: "none" }}
            to={`/${showpost.id}`}
          >
            <h4
              style={{ color: "black", textAlign: "left", marginLeft: "5px" }}
            >
              {showpost.title}
            </h4>
            <hr />
          </Link>
        </div>
      ))}
    </div>
  );
}

function Body({ match }) {
  const [post] = useContext(HomeContext);
  console.log(post, match.params.postId);
  const comment = post.filter(item => item.id == match.params.postId);
  console.log(comment);
  return (
    <BodyMessage>
      <h2>Message</h2>
      <p>{comment.map(message => message.body)}</p>
    </BodyMessage>
  );
}

export default App;
