import "../styles/Principal.css";
import Blog_1 from "../images/blog-1.jpg";
import Blog_2 from "../images/blog-2.jpg";
import Blog_3 from "../images/blog-3.jpg";
import Blog_4 from "../images/blog-4.jpg";

export default function Principal() {
  return (
    <main className="main">
      <aside className="aside">
        <div className="title">This is me</div>
        <img src="/images/my-avatar.PNG" alt="My avatar" />
      </aside>
      <section className="principal">
        <div className="card">
          <img src={Blog_1} alt="Card 1" />
          <p>Card 1 description</p>
        </div>
        <div className="card">
          <img src={Blog_2} alt="Card 2" />
          <p>Card 2 description</p>
        </div>
        <div className="card">
          <img src={Blog_3} alt="Card 3" />
          <p>Card 3 description</p>
        </div>
        <div className="card">
          <img src={Blog_4} alt="Card 4" />
          <p>Card 4 description</p>
        </div>
      </section>
    </main>
  );
}
