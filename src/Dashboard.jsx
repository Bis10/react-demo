import React, { useState } from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
        {user === 'Bishnu' ?(
            <h2>Welcome to inner circle, {user}</h2>
           ):(
            <h2>Oh you must be new one in here, {user}</h2>  // if the user is Bishnu the first statement and if the user is not Bishnu the second statement. Check the rendering part in App.jsx.
           ) }
        </div>
  );
};

export default Dashboard;