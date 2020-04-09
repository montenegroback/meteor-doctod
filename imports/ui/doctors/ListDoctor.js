import React from 'react';
import { DoctorsCollection } from '../../api/doctors';

export const ListDoctor = ({doctors}) => {

    const deleteDoctor = (doctor) => {
        DoctorsCollection.remove(doctor._id);
    }

    return (
        <div className="container">
            {
                doctors.map((doctor, index) => 
                    <div key={index} className="card">
                        <div className="card-content">
                            <p className="is-6"><strong>Dr.(a) {doctor.names} {doctor.lastName} {doctor.motherLastName}</strong></p>   
                            <p className="has-text-grey">{doctor.rut}</p>
                            <span className="tag is-primary">{doctor.specialty}</span>
                            <button className="button is-danger is-rounded is-small is-pulled-right" onClick={() => deleteDoctor(doctor)}>Eliminar</button>
                        </div>
                    </div>
                )
            }
        </div> 
    );
}