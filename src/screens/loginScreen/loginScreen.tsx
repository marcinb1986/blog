import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../../components/Wrapper/styles";

export const LoginScreen = () => {
  return (
    <Wrapper>
      <section>
        <p>Log in to the blog</p>
        <input></input>
        <input></input>
        <button>
          <Link to="/main">Go </Link>
        </button>
      </section>

      <section>
        <p>Go to blog without logging in</p>
        <button>
          <Link to="/main">Go without</Link>
        </button>
      </section>
    </Wrapper>
  );
};
