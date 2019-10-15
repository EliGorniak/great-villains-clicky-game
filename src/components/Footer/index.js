import React from "react";

let style = {
  back: {
    background: "grey",

    width: "100%"
  },
  link: {
    color: "black"
  }
};

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4" style={style.back}>
      <div className="card-footer text-muted">
        <a
          style={style.link}
          href="https://github.com/EliGorniak/great-villains-clicky-game"
        >
          {" "}
          Code on Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
