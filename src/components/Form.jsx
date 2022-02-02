import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        let cars = [];
        const addCar = (ev) => {
            ev.preventDefault();
            let car = {
                producer: document.getElementById('producer').value,
                type: document.getElementById('type').value,
                engine_displacement: document.getElementById('engine_displacement').value,
                color: document.getElementById('color').value,
                design: document.getElementById('design').value,
                date_of_manufacture: document.getElementById('date_of_manufacture').value,
                web_of_producer: document.getElementById('web_of_producer').value,
            }
            cars.push(car);
            document.querySelector('form').reset();            
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('btn').addEventListener('click', addCar);
        });
    };
    
      
    return (
        <>
            <h2>Új autók felvitele</h2>
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("producer")}
                        id="producer"
                        placeholder="Gyártó"
                        type="text" />
                    <input
                        {...register("type")}
                        id="type"
                        placeholder="Típus"
                        type="text" />
                    <input
                        {...register("engine_displacement")}
                        id="engine_displacement"
                        placeholder="Motor hengerűrtartalom"
                        type="number" />
                    <input
                        {...register("color")}
                        id="color"
                        placeholder="Szín"
                        type="text" />
                    <input
                        {...register("design")}
                        id="design"
                        placeholder="Kivitel"
                        type="text" />
                    <input
                        {...register("date_of_manufacture")}
                        id="date_of_manufacture"
                        placeholder="Gyártási időpont"
                        type="date" />
                    <input
                        {...register("web_of_producer")}
                        id="web_of_producer"
                        placeholder="Gyártó weboldala"
                        type="text" />
                    <button type="submit" value="Submit">Submit</button>
                    <button type="reset" value="Reset">Reset</button>
                </form>
            </div>
        </>    
    );
}