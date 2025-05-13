import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {

  const users = [
    { userName: "midudev", name: "Miguel Angel", isFollowing: true },
    { userName: "holamundo", name: "Hola Mundo", isFollowing: true },
    { userName: "pheralb", name: "Pablo Hernández", isFollowing: true },
    { userName: "fflo", name: "Fernando Flores", isFollowing: false },
  ];

  return (
    <section className="App">
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        )
        )}
    </section>
  );

}

export default App;