import { useQuery } from '@apollo/client';
import { SEARCH_POKEMON } from '../services/pokemonServices';
import "../styles/card.css";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card } from "primereact/card";
import { Pokemon } from '../models/pokemon';
import { Button } from 'primereact/button';

export function PokemonsContainer() {
    const { control, handleSubmit } = useForm<Pokemon>();
    const [searchBean, setSearchBean] = useState<string>('');

    const { data, loading, error } = useQuery(SEARCH_POKEMON, {
        variables: { name: searchBean },
        skip: !searchBean,
    });

    console.log("API response:", data);


    const pokemons: Pokemon[] = data?.pokemon || [];

    console.log("API response:", pokemons.name);

    const onSubmit = (data: any) => {
        setSearchBean(data.name); // Set the search query to trigger the refetch
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Card className="p-mb-2 card-result" style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <div className="col-12" style={{ margin: "5%" }}>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <label className="header" style={{ fontWeight: "bold", display: "block", marginLeft: "0" }}>
                                Pokemon Name
                            </label>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <InputText
                                        placeholder="Search Pokemon Name"
                                        id={field.name}
                                        {...field}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        value={field.value || ""}
                                        style={{
                                            borderRadius: "7px",
                                            width: "300px",
                                            height: "40px",
                                            marginRight: "1rem",
                                            padding: "10px",
                                        }}
                                    />
                                )}
                            />
                            <Button
                                label={"Search"}
                                className="p-button-success"
                                style={{
                                    width: "100px",
                                    height: "40px",
                                    color: "white",
                                    backgroundColor: "blue"
                                }}
                            />
                        </div>
                    </div>
                    {(data?.pokemon != null && data?.pokemon != undefined) && (
                        <div className="grid-container">
                            <div className="pokemon-card">
                                <div className='main'>
                                    <img className='pokemonImage' src={pokemons.image} alt={pokemons.name} />
                                    <h2 onClick={() => setSearchBean(pokemons.evolutions[0].name)} >{pokemons.name}</h2>
                                    <h3 className='description'>({pokemons.classification || 'No description available.'})</h3>
                                    <div className='pokemonInfo'>
                                        <p>Type: {pokemons.types.join(", ")}</p>
                                        <p>Resistant: {pokemons.resistant.join(", ")}</p>
                                        <p>Weaknesses: {pokemons.weaknesses.join(", ")}</p>
                                        <p>Max CP: {pokemons.maxCP}</p>
                                        <p>Max HP: {pokemons.maxHP}</p>
                                    </div>
                                    <div className='pokemonInfo'>
                                        <h4 style={{ color: '#31e1fd', fontWeight: 'bold' }}>Fast Attacks:</h4>
                                        {pokemons.attacks.fast.map((attack, index) => (
                                            <div key={index} style={{ marginBottom: "10px", color: index % 2 != 0 ? '#bbff9d' : '#ff9dc1' }}>
                                                <p>Name: {attack.name}</p>
                                                <p>Type: {attack.type}</p>
                                                <p>Damage: {attack.damage}</p>
                                            </div>
                                        ))}
                                        <h4 style={{ color: '#31e1fd', fontWeight: 'bold' }}>Special Attacks:</h4>
                                        {pokemons.attacks.special.map((specials, index) => (
                                            <div key={index} style={{ marginBottom: "10px", color: index % 2 != 0 ? '#bbff9d' : '#ff9dc1' }}>
                                                <p>Name: {specials.name}</p>
                                                <p>Type: {specials.type}</p>
                                                <p>Damage: {specials.damage}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <hr />
                                    <div className='creator'>
                                        <p>Weight: {pokemons.weight.minimum} - {pokemons.weight.maximum}</p>
                                        <p>Height: {pokemons.height.minimum} - {pokemons.height.maximum}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Card>
            </form>
        </div>
    );
}
