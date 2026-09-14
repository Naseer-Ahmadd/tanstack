import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start';
import { useState } from 'react';
import { saveFavouritePokemonFn } from '#/server/pokemon';

export const Route = createFileRoute('/favourite')({
  component: FavouritePage,
})

function FavouritePage() {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const savePokemon = useServerFn(saveFavouritePokemonFn)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Saving...');
        try {
            await savePokemon({data: name});
            setStatus(`saved successfully: ${name}`);
            setName(''); // Clear the input field after successful save
        } catch (error) {
            setStatus('Error saving favorite Pokémon.');
        }
    }
  return <main className="page-wrap px-4 pb-8 pt-14"> 
        <h1 className="text-4xl font-bold">Save Your Favourite Pokémon</h1>
        <form
            onSubmit={handleSubmit}
            className="mt-4"
        >
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Pokémon name"
                className="border p-2 rounded mr-2"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
            </button>
        </form>
        {status && <p className="mt-4">{status}</p>}    

  </main>
}
