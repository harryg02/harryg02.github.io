export default function NotFound() {
  return (
    <>
      <style>{`
        @font-face {
          font-family: "TerminalDisplay";
          src: url("/fonts/terminaldisplay.ttf");
        }

        body,
        html {
          height: 100%;
          margin: 0;
          font-family: "TerminalDisplay";
          display: flex;
          justify-content: center;
          align-items: center;
          background: black;
          color: #CCD4E3;
        }

        .not-found-container {
          text-align: center;
        }

        .not-found-link {
          color: #CCD4E3;
          font-size: 1.5em;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
      <main className="not-found-container">
        <p className="text-5xl">404 Not Found</p>
        <p className="text-xl p-4">The page you are looking for does not exist.</p>
        <a href="/" className="not-found-link text-xl">
          Go Back Home
        </a>
      </main>
    </>
  );
}
