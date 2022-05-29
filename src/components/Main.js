import React from "react";
import { Container, Card } from "react-bootstrap";
import { IconContext } from "react-icons";
import Id from '../Id.jpg';
import imageLogo from '../react.png';
import { FaGithub, FaYoutube, FaFacebook,FaGlobe } from 'react-icons/fa';

export default function Main(){
    return(
        <Container>
        <IconContext.Provider value={{color: "#61DAFB", size: "2em"}}>
        <div className="d-flex justify-content-center align-items-center">
          <Card style={{ width: '18rem'}} className="card shadow">
            <Card.Img variant="top" src={Id} className="Id"/>
              <Card.Body>
                <Card.Title className="text-center">Shing Mae</Card.Title>
                <Card.Text>
                  Hi! I like using react because of the following:
                  <ul className="mt-2 mb-4">
                      <li>It loads fast!</li>
                      <li>It's very popular</li>
                      <li>Maintained by reliable people</li>
                      <li>Very hireable skills to have</li>
                  </ul>
                  <div>Go to the links down below to know me better!</div>
                </Card.Text>
                <div className="brand">
                  <a href="https://github.com/ShingMaxhing" target="_blank"><FaGithub/></a>
                  <FaFacebook/>
                  <a href="https://www.youtube.com/channel/UCnbd3pY1z_Abe5tnI-oxhcA" target="_blank"><FaYoutube/></a>
                  <a href="http://portfolio.deetsauce.com/" target="_blank"><FaGlobe/></a>
                </div>
              </Card.Body>
          </Card>
          <img src={imageLogo} className="image-logo"/>
          <img src={imageLogo} className="image-logo"/>
        </div>
        </IconContext.Provider>
        </Container>
    )
}