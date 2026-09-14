import { createServerFn } from "@tanstack/react-start";
const pokeapiurl='https://pokeapi.co/api/v2/pokemon'

export const getPokemonFn = createServerFn({method: 'GET'}).handler(async () => {
const response = await fetch(pokeapiurl)
    // if (!response.ok) {
      // throw new Error('Failed to fetch data from pokeapi')
    // }
    // throw notFound()
    // console.log('data from serverrrr....',response)
    const data = await response.json()
    return data;
})

export const saveFavouritePokemonFn = createServerFn({method: 'POST'})
.inputValidator((name: string)=> name).handler(async ({data}) => {
  console.log(`Saving favorite Pokémon: ${data}`);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async operation
  return { success: true, saved: `Favorite Pokémon ${data} saved successfully!` };
})