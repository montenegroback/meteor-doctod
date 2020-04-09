import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import { AddDoctor } from './doctors/AddDoctor';
import { ListDoctor } from './doctors/ListDoctor';
import { NotFoundDoctor } from './doctors/NotFound';

import { DoctorsCollection } from '../api/doctors';

export const App = () => {
  
  const getDoctors = useTracker(() => {
    return DoctorsCollection.find({}, {sort: {createdAt: -1}}).fetch();
  });

  return (
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-4">
          <AddDoctor />
        </div>
        <div className="column"> 
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item title is-5 has-text-primary	" href="#">Doctores</a>
            </div>
          </nav>   
          {
            getDoctors.length ? <ListDoctor doctors={getDoctors} /> : <NotFoundDoctor />
          }    
        </div>
      </div>
    </div>
  );
};
