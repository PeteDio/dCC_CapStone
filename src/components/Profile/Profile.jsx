import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = (props) => {

  
  const meals = [
    {
        "recipe": "https://norecipes.com/beef-tacos-recipe/",
        "label": "beef tacos"
    },
    {
        "recipe": "https://food52.com/recipes/14484-portabello-beef-stew",
        "label": "Portabello Beef Stew"
    }
]

  return (
    <React.Fragment>
      {console.log(props)}
      <div>
        <form>
          <Table>
            <tbody>
              <tr>
                <td>First Name: {props.user.first_name}</td>
                <td>Last Name: {props.user.last_name}</td>
                <td>Middle Name: {props.user.middle_name}</td>
                <td>Username: {props.user.username}</td>
                <td>Email: {props.user.email}</td>
              </tr>
              <Link to="/EditProfile">Edit Profile</Link>
            </tbody>
          </Table>
        </form>
        <div className="favmeals">
        {meals.map((meal) => (
           <h4>{meal.label}</h4>,
           <h6>{meal.recipe}</h6>
        ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
