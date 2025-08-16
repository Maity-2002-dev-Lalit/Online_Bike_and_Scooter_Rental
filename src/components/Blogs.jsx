import React from 'react'
import { useState } from 'react';
import blogs from './Blogsdata';
const Blogs = () => {

  return (
    <div>
      <div className="blogs">
        <div className="container " style={{position:"absolute",top:"100px",left:"50px"}}>
          <div className="row g-4">
            {blogs.map((blogs, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <span className="badge bg-info text-dark mb-2">{blogs.tag}</span>
                    <h5 className="card-title">{blogs.title}</h5>
                    <p className="text-muted small mb-1">
                      {blogs.date} / {blogs.location}
                    </p>
                    <p className="card-text">{blogs.desc}</p>
                    <a href={blogs.link} className="fw-bold text-decoration-none">
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default Blogs
