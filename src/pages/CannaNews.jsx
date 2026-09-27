import "./CannaNews.css";

function CannaNews() {
  return (
    <main
      style={{
        minHeight: "500px",
        padding: "100px 20px",
        background: "yellow",
        color: "black",
      }}
    >
      <h1 style={{ color: "red", fontSize: "50px" }}>
        TEST CANNA NEWS
      </h1>

      <p style={{ fontSize: "30px" }}>
        Si tu vois ce texte, CannaNews fonctionne.
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "30px",
          background: "white",
          border: "5px solid red",
        }}
      >
        <h2>ARTICLE TEST</h2>
        <p>
          Ceci est une news de test.
        </p>
      </div>
    </main>
  );
}

export default CannaNews;
