import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";


export const HERO_CONTENT = `I am a passionate and driven full stack developer with a strong foundation in Java, where I have excelled in mastering Data Structures and Algorithms (DSA). My journey in the tech world is fueled by an insatiable curiosity and a relentless drive to learn and grow. Although I am still in the process of mastering web technologies, I have already gained solid experience in HTML, CSS, JavaScript, React, MongoDB, and Node.js. My ability to quickly grasp new concepts and apply them effectively sets me apart. I am also a natural leader with strong communication skills, enabling me to guide teams and articulate ideas clearly. My goal is to continue learning, pushing boundaries, and leveraging my growing expertise to create innovative solutions that not only meet but exceed expectations.`;

export const ABOUT_TEXT = `I hold a B.Tech in Information Technology from SRMSCET Bareilly. My academic journey has laid a strong foundation in computer science, and I am now focused on enhancing my skills in web development. I am passionate about improving my logical abilities through rigorous practice in Data Structures and Algorithms (DSA), with a preference for using Java. Alongside Java, I have a basic knowledge of C++ and I am familiar with SQL,Snowflake,Google Cloud. I am committed to continuous learning, and day by day, I am expanding my expertise in various technologies, striving to become a well-rounded developer.`;


export const EXPERIENCES = [
  {
    year: "2022 - Jan-March",
    role: "Internship on MERN Technologies-Intern",
    company: "SSDN Technologies",
    description: `• Developed dynamic web applications, including a Book Managment application, To-Do application and a Employee application, using the MERN stack.  Enhanced skills in full-stack development through hands-on project implementation and real-world problem-solving.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  {
    year: "2022 - May",
    role: "Project Engineer",
    company: "Wipro Limited",
    description: `• Worked on KPI Visualization project as a frontend developer using React.js, JavaScript, HTML, and CSS. Developed a responsive and user-friendly client-facing dashboard that significantly enhanced the overall user experience. Utilizing React.js, React Hooks, and functional components, I built dynamic and responsive user interfaces that adapt seamlessly to different devices. `,
    technologies: ["Javascript", "React.js", "HTML", "CSS"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project1,
    description:
      "Developed my portfolio using HTML, React, and Tailwind CSS to showcase my skills, projects, and experiences. Leveraging the power of React for a dynamic user interface and Tailwind CSS for sleek, responsive design, this portfolio reflects my expertise in front-end development and my commitment to creating visually appealing and highly functional web applications.",
    technologies: ["HTML", "Javascript", "Tailwind", "React"],
    link : 'https://github.com/muskaan-1801/react-portfolio'
  },
  {
    title: "Book App",
    image: project2,
    description:
      "This application allows users to add, view, and delete books details with data stored in the browser's local storage for persistence across sessions. It features responsive UI , ensuring usability across devices. Modern JavaScript with ES6 Classes : The Project leverage ES6features such as classes, arrow functions, and modular code structure.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootswatch"],
    link : 'https://github.com/skyline070/BookApp'
  },
  {
    title: "RockPaperScissor",
    image: project3,
    description:
      "Developed a Rock-Paper-Scissors game using HTML, CSS, and JavaScript, with a primary focus on JavaScript to demonstrate the creation of a dynamic, interactive game. This project showcases various JavaScript functionalities, including event handling, logic implementation, and DOM manipulation, providing a fun and engaging way to explore the capabilities of the language.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link : 'https://github.com/skyline070/RockPaperScissorsGame'
  },
  {
    title: "Typing Master",
    image: project4,
    description:
      "Typing master is a Web-Based typing tool that tracks your speed and accuracy with the real-time countdown timer. it provides the score after each session, helping users improve their typing skills efficiently (Type each word in the given amount of seconds to score. To play again, just type the current word. Your score will reset).",
    technologies: ["HTML", "Bootstrap", "JavaScript"],
    link : 'https://github.com/skyline070/TypingMaster'
  },
  {
    title: "Recipe-App",
    image: project5,
    description:
      "Developed a recipe-app using React, which connects to an API to provide users with a seamless experience in finding recipes. Users can search for recipes using the input field, and the app fetches and displays related recipes along with detailed information such as calories and ingredients. This project showcases my ability to integrate external APIs and build responsive, user-friendly interfaces with React.",
    technologies: ["HTML", "CSS", "JavaScript","React"],
    link : 'https://github.com/skyline070/Recipe-App'
  },
];

export const CONTACT = {
  address: "Uttar-Pradesh , India",
  phoneNo: "+91 7XXXXXXXXX",
  email: "me@example.com",
};
