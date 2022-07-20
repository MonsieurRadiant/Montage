import React from 'react';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

function UserProfile() {
  const dispatch = useDispatch();

  const getProfileData = () => {
    var id = window.location.pathname.split('/')[1];
    fetch(`http://localhost:3001/users/${id}`, {method: 'GET'})
    .then((data) => dispatch(getUserData(data)))
  }

  const profileData = useSelector(state => state.profile.data);

  return (
    <div className = "UserProfile">
      <div>
        <h4>{profileData.fullName}</h4>
      </div>
    </div>
  )
}
