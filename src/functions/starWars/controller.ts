
import { formatJSONResponse, formatJSONResponseError } from '@libs/apiGateway';
import fetch from "node-fetch";
import { Person } from './interface';

export = () => {

    const endPointPeople = 'https://swapi.py4e.com/api/people/'

    async function people (event: any) {
        try {
            const id = event?.pathParameters?.id;
            const url = `${endPointPeople}${id}/`;
            const data = await fetch(url);
            if( ! data.ok ) return formatJSONResponse({ error: 'Parametro invalido' });
            else {
                const person: Person = await data.json();
                const response = translateData(person);
                return formatJSONResponse( response );
            }
        } catch ( err ) { return formatJSONResponseError({ error: err }); }
    }

    return {
        people
    };
}

const translateData = (person: Person) => {
    const response = {
      nombres: person.name,
      altura: person.height,
      masa: person.mass,
      color_cabello: person.hair_color,
      color_piel: person.skin_color,
      color_ojos: person.eye_color,
      ano_nacimiento: person.birth_year,
      genero: person.gender,
      mundo_origen: person.homeworld,
      peliculas: person.films,
      especies: person.species,
      vehiculos: person.vehicles,
      naves_estelares: person.starships,
      creado: person.created,
      editado: person.edited,
      url: person.url
    };
    return response;
}