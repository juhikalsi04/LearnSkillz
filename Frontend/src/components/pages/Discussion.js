import React from 'react';

const Discussion = () => {
  return (
    <div>
      <h1>Discussion Forum</h1>
      <hr></hr>
      <div className="mb-3">
        <label
          className="form-label"
          htmlFor="name"
          style={{ marginBottom: '10px', fontSize: '18px' }}
        >
          Your Name :
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          style={{ fontSize: '18px' }}
        />
        <div>
          <label
            className="form-label"
            htmlFor="name"
            style={{ marginBottom: '10px', fontSize: '18px' }}
          >
            Title :
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            style={{ fontSize: '18px' }}
          />
        </div>
      </div>
      <div className="mb-3 ">
        <label
          className="form-label"
          htmlFor="doubts"
          style={{ fontSize: '18px' }}
        >
          Write your doubts here:
        </label>
        <div>
          <textarea
            className="form-control"
            id="doubts"
            rows="3"
            style={{ fontSize: '18px', marginBottom: '10px' }}
          ></textarea>
          <div style={{ marginBottom: '20px' }}>
            <button type="button" className="btn btn-primary">Post Question</button>
          </div>
          <div className='my-6'>
            <h2>Recent Posts</h2>
            <div className="card " style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px', }}>
              <div className="card-header">
                title
              </div>
              <div className="card-body">
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a className="btn btn-primary">Reply</a>
                <p className="card-text"><small className="text-body-secondary">username</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discussion;
