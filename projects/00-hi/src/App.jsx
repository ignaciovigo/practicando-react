import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";
function App() {
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      isFollowing: true,
    },
    {
      userName: "perez",
      name: "Perez Herlando",
      isFollowing: false,
    },
    {
      userName: "moonlight",
      name: "Monu Light",
      isFollowing: false,
    },
    {
      userName: "Flor",
      name: "Flor Ortega",
      isFollowing: true,
    },
  ];
  return (
    <section className="App">
        {users.map(({userName,name,isFollowing},idx) =>{
            return <TwitterFollowCard key={userName+idx} userName={userName} name={name} initialIsFollowing={isFollowing}/>
        })}
    </section>
  );
}

export default App;
