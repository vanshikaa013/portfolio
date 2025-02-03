import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import project7 from "../assets/images/project7.png";
import project8 from "../assets/images/project8.png";
import project9 from "../assets/images/project9.png";
import project10 from "../assets/images/project10.png";

import "../assets/styles/Project.scss";
function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <a
            href="https://parathastoreredux.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project1} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://parathastoreredux.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Paratha Store</h2>
          </a>
          <p>
            Your Paratha Store Website is a React-based e-commerce platform with
            a Redux-managed cart, dark/light mode, and order confirmation popup
            for a smooth user experience.{" "}
          </p>
        </div>
        <div className="project">
          <a
            href="https://cryptobazarr.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://cryptobazarr.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Crypto Bazar</h2>
          </a>
          <p>
            Crypto Bazar is a web app that fetches real-time cryptocurrency
            data, displays detailed coin insights, and allows users to add coins
            to a cart. It features a smooth UI and showcases API integration and
            state management.{" "}
          </p>
        </div>
        <div className="project">
          <a
            href="https://github-serach-user.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project3} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github-serach-user.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Github Search User</h2>
          </a>
          <p>
            GitHub User Search is a web app that allows users to search for a
            GitHub ID and view all associated repositories. It fetches real-time
            data from the GitHub API, providing a seamless and efficient user
            experience.
          </p>
        </div>
        <div className="project">
          <a
            href="https://bike-complaint-management-system.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project4} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://bike-complaint-management-system.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Bike Complaint Managment system</h2>
          </a>
          <p>
            Developed a Bike complaint management system which has a
            authentication facility and contains to panels (Admin Panel & User
            Panel), User can raise complaints about their Bike and view their
            complaint status also.. Admin can see all the Users available in the
            Database.
          </p>
        </div>
        <div className="project">
          <a
            href="https://weather-app-7k27.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project5} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://weather-app-7k27.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Weather App</h2>
          </a>
          <p>
            Weather App is a web app that fetches weather of any city from an
            external API and represent it on the UI. It also contains theme
            context which changes the Theme when clicked on Toggle button.
          </p>
        </div>
        <div className="project">
          <a
            href="https://news-app-theta-red.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project6} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://news-app-theta-red.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>News App</h2>
          </a>
          <p>
            I'm piecing together a dynamic news website with an external API,
            offering seamless search and access to captivating news across
            cities and categories like international, sports, business, and
            Bollywood.
          </p>
        </div>
        <div className="project">
          <a
            href="https://expense-manager-gamma-liart.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project7} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://expense-manager-gamma-liart.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Expense Manager</h2>
          </a>
          <p>
            Expense Manager is a web app in which you can store yur expenses and
            incomes which totals the balance in the UI .. to show income you
            have to give value in positive value and to show expenses you have
            to give values in negative.
          </p>
        </div>
        <div className="project">
          <a
            href="https://vanshikaa013.github.io/carry-on-web/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project8} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://vanshikaa013.github.io/carry-on-web/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Carry On Web UI</h2>
          </a>
          <p>
            Carry On Web is a web app made by using HTML and styled by using
            external CSS which made it more attractive .. also applied positions
            in it.
          </p>
        </div>
        <div className="project">
          <a
            href="https://vanshikaa013.github.io/suzuki-/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project9} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://vanshikaa013.github.io/suzuki-/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Suzuki UI</h2>
          </a>
          <p>
            Suzuki is a Web app made by using HTML and CSS and also applied
            slider from Bootstrap in it. It is basically a copy of a original
            website.
          </p>
        </div>
        <div className="project">
          <a
            href="https://vanshikaa013.github.io/netflix/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={project10}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://vanshikaa013.github.io/netflix/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Netflix UI</h2>
          </a>
          <p>Made a copy of Netflix original website using HTML and styled it using CSS </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
