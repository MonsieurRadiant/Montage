import React from 'react';

function UserProfile() {
  return (
    <div className = "UserProfile">
      <div>
        <div style={{
          display:"flex",
          justifyContent:"space-around",
          margin:"18px 0px",
          borderBottom:"1px solid grey"
        }}>
          <img style={{width:"160px", height:"160px", borderRadius: "80px"}}
          src={requre("../images/profileImage.jpeg")} />
        </div>
        <div>
          <h4>Andy</h4>
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
            <button>Liked movies</button>
            <button>Comments</button>
          </div>
        </div>
      </div>
    </div>
  )
}
