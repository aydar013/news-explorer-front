import authorPicture from "../../images/about-author.jpg";

const About = () => {
  return (
    <section className="about">
      <img src={authorPicture} alt="author" className="about__picture" />
      <div className="about__author">
        <h2 className="about__author-heading">About the author</h2>
        <p className="about__author-description">
          Hello, world! My name is Aidar Shaidullin. <br></br> <br></br> I'm a
          passionate sports enthusiast and a web development wizard. With a love
          for sports, I learned discipline and teamwork early on.<br></br>{" "}
          <br></br> I already created a few web applications, mastered HTML5,
          CSS, JavaScript, React, Express.js, and Node.js. With responsive and
          user-friendly interfaces. I'm open for new adventures and challenges
          coming up in my life;)
        </p>
      </div>
    </section>
  );
};

export default About;
