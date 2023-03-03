const app = document.getElementById('app');
function Header() {
  return <h1>Hello World with Reacts</h1>;
}

function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}

ReactDOM.render(<HomePage />, app);