import SideBar from "./SideBar";
import Card from "./Cardd";
const Main = () => {
  return (
    <>
      <SideBar />
      <main>
        <section className="text-naranja section d-flex flex-wrap justify-content-center align-items-center gap-4 py-3">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
};

export default Main;
