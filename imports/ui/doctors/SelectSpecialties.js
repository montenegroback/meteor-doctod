import React from 'react';
import specialties  from '../../api/specialties';

export const SelectSpecialties = ({register, required, classNames}) => {

    return (
        <>
            <label className="label">Especialidad médica</label>
            <div className={classNames}>    
                <select ref={register({required})} name="specialty">
                    {
                        specialties.map((specialty, index) => 
                            <option key={index} value={specialty.nombre}>{specialty.nombre}</option>
                        )
                    }
                </select>
            </div>
        </>
    );
}
