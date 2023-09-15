
import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import p1 from '../images/p1.png';
import p5 from '../images/p5.jpg';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';


const Projects = () => {
   const ProjectList = [
    {
      id:1,
      name: "Todo App",
      technology:['HTML, ', 'CSS, ', 'JavaScript, ','NodeJS, ','React, ', 'Express, ', 'MondoDB ',],
      imageUrl: p5,
      projectUrl:'https://marystodoapp.netlify.app/'
     },
   {
    id:1,
    name: "Bookmark App",
    technology:['HTML, ', 'CSS, ', 'JavaScript, ','NodeJS, ','React, ', 'Express, ', 'MondoDB ',],
    imageUrl: p3,
    projectUrl:'https://melodious-cupcake-9295ad.netlify.app/'
   },
   {
    id:1,
    name: "Int'Decor Blog",
    technology:['HTML, ', 'CSS, ', 'JavaScript, ','NodeJS, ','React, ', 'Express, ', 'MondoDB '],
    imageUrl: p4,
    projectUrl:'https://illustrious-tanuki-5c7ded.netlify.app/#/'
   }
   ,
   {
    id:1,
    name: "Book App",
    technology:['HTML, ', 'CSS, ', 'JavaScript, ','NodeJS, ','React, ', 'Python, ', 'MondoDB ', 'Material UI, ', 'Framer Motion, '],
    imageUrl: p1,
    projectUrl:'https://super-hummingbird-e18ad8.netlify.app/#/'
   }
   
   

];
return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card class='prjct'>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title><a href= {item.projectUrl}target='_blank' rel="noreferrer" ><h3>{item.name} </h3></a>
                     </Card.Title>
                </Card.Body>
              </Card>
                  <p>
                    <h4>Technologies used:</h4>
                    {item.technology}
                  </p>
            </motion.div>
            
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
