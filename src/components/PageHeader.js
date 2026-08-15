import TopBar from "./TopBar";
import Navbar from "./Navbar";

export default function PageHeader({ title, description }) {
  return (
    <>
      <TopBar />
      <Navbar />
      <header className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">{title}</h1>
          {description && <p className="text-base text-white/70 max-w-xl mx-auto">{description}</p>}
        </div>
      </header>
    </>
  );
}
