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
            document.querySelector('#submit').addEventListener('click', addCar);
        });
    };
    
      
    return (
        <>
            <h2>Új autók felvitele</h2>
            <div className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("producer", { required: true })}
                        id="producer"
                        placeholder="Gyártó"
                        type="text" />
                    <input
                        {...register("type", { required: true })}
                        id="type"
                        placeholder="Típus"
                        type="text" />
                    <input
                        {...register("engine_displacement", { required: true })}
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
                        {...register("date_of_manufacture", { required: true })}
                        id="date_of_manufacture"
                        placeholder="Gyártási időpont"
                        type="date" />
                    <input
                        {...register("web_of_producer",
                            // pattern: ((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*),
                        )}
                        id="web_of_producer"
                        placeholder="Gyártó weboldala"
                        type="text" />
                    <button type="reset" value="Reset" id="delete">Mezők törlése</button>
                    <button type="submit" value="Submit" id="submit">Mentés</button>
                </form>
            </div>
        </>    
    );
}