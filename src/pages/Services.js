
import React from 'react';
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import jslogo from '../images/js-logo.png';
import html from '../images/html.png';
import css from '../images/css.png';
import react from '../images/react.png';
import express from '../images/express.png';
import python from '../images/python.png';
import php from '../images/phpnew.png';
import github from '../images/githubnew.png';
import bootstrap from '../images/bootstrap-frame.png';
import mongodb from '../images/mongo-db.png';
import nodejs from '../images/nodejsnew.png';

const Services = () => {

    const serviceList = [
        {
         
         id:1,
         name: "HTML",
         imageUrl: html
        },
        {
          id:1,
          name: 'CSS',
          imageUrl: css
         },
        {
        id:1,
        name: "JavaScript",
        imageUrl: jslogo
       },
       {
        id:1,
        name: "React",
        imageUrl: react
       },
       {
        id:1,
        name: "Express Js",
        imageUrl: express
       },
       {
        id:1,
        name: "Python",
        imageUrl: python
       },
       {
        id:1,
        name: "PHP",
        imageUrl: php
       },
       {
        id:1,
        name: "Github",
        imageUrl: github
       },
       {
        id:1,
        name: "Bootstrap",
        imageUrl: bootstrap
       },
       {
        id:1,
        name: "MongoDB",
        imageUrl: mongodb
       },
       {
        id:1,
        name: "NodeJS",
        imageUrl: nodejs
       }
       ];
       return (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
        >
          <div className="services">
            <h2>Skills</h2>
            <div className="wrapper">
              {serviceList.map((item) => {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 1, ease: "easeInOut" },
                    }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <Card  >
                      <Card.Img style={{height:'20%',width:'20%', paddingTop: '40px' ,marginLeft:'auto',marginRight:'auto'}} variant="top" src={item.imageUrl} />
                      <Card.Body>
                        <Card.Title> {item.name}</Card.Title>
                      </Card.Body>
                    </Card>


                    <Card.Body>
                      <Card.Title >{item.name}</Card.Title>
                      </Card.Body>


                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      );
    };
    
    export default Services;
