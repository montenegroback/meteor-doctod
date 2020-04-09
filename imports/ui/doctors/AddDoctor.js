import React from 'react';
import { useForm } from 'react-hook-form';

import { SelectSpecialties } from './SelectSpecialties';
import { DoctorsCollection } from '../../api/doctors';

export const AddDoctor = () => {

    const { register, handleSubmit, errors, setError, clearError, setValue, reset } = useForm();
    const { validate } = require('rut.js');

    const onRegisterSubmit = (data) => {
        DoctorsCollection.insert({...data, ...{createdAt: new Date()}});
        reset();
    }

    const handleRutValidator = (e) => {
        let rut = e.target.value;
        if(validate(rut)) return clearError("rut");
        setValue('rut', '');
        setError("rut", "notMatch", "Introduce un RUT valido");
    }

    const errorValidator = (control) => {
        return errors[control] ? 'is-danger' : '';
    }

    return (
        <div className="is-flex-mobile" id="form-add-doctor">
            
            <p className="title is-5">
                Registro de Doctores
            </p>

            <form onSubmit={handleSubmit(onRegisterSubmit)}>

            <div className="field">
                <label className="label">Nombre(s)</label>
                <div className="control">
                    <input 
                        ref={register({required: true})} 
                        name="names" 
                        className={`input ${errorValidator('names')}`} 
                        type="text" />
                </div>
            </div>

            <div className="field">
                <label className="label">Apellido paterno</label>
                <div className="control">
                    <input 
                        ref={register({required: true})} 
                        name="lastName" 
                        className={`input ${errorValidator('lastName')}`}
                        type="text" />
                </div>
            </div>

            <div className="field">
                <label className="label">Apellido materno</label>
                <div className="control">
                    <input 
                        ref={register({required: true})} 
                        name="motherLastName" 
                        className={`input ${errorValidator('motherLastName')}`}
                        type="text" />
                </div>
            </div>

            <div className="field">
                <label className="label">RUT</label>
                <div className="control">                
                    <input 
                        ref={register({required: true})} 
                        name="rut" 
                        onBlur={handleRutValidator} 
                        className={`input ${errorValidator('rut')}`}
                        type="text" />
                    <p className="help is-danger">{errors.rut && errors.rut.message}</p>
                </div>
            </div>
            
            <div className="field">
                <SelectSpecialties 
                    register={register} 
                    required
                    classNames={`select ${errorValidator('rut')}`}
                    />
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-primary is-rounded" type="submit">Guardar</button>
                </div>
            </div>
        </form>
        </div>
    );
}