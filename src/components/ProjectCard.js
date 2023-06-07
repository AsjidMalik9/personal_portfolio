import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, visitLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="img-fluid" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='mt-2'>
          <a href={visitLink} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
            Visit
          </a>
          </div>
        </div>

      </div>
    </Col>
  )
}
