import SkillCard from '#/components/SkillCard'
import { createFileRoute , useRouter , notFound} from '@tanstack/react-router'

const pokeapiurl='https://pokeapi.co/api/v2/pokemon'
export const Route = createFileRoute('/')({ component: Home,
  pendingComponent: () => <div className="p-8 text-center">Loading...</div>,
  pendingMs: 500,
  loader: async () =>{
    const response = await fetch(pokeapiurl)
    // if (!response.ok) {
      // throw new Error('Failed to fetch data from pokeapi')
    // }
    throw notFound()
    const data = await response.json()
    return data;
  },
  errorComponent: ({ error }) => {
    const router = useRouter()

    return (<div className="p-8 text-center">
      <h2 className="text-2xl font-bold">Error</h2>
      <p className="mt-4">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => router.invalidate()}
      >
        Try Again
      </button>
    </div>)
  },
  notFoundComponent: () => { return <div className="p-8 text-center">404 Not Found</div>}  
})

function Home() {
  const data = Route.useLoaderData()
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">Welcome to TanStack Start</h1>
      <ul className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.results.map((pokemon: { name: string }) => (
        <li key={pokemon.name} className="feature-card island-shell rise-in rounded-3xl p-5">
          <SkillCard name={pokemon.name} />
        </li>
      ))}
      </ul>
      {/* <p className="mt-4 text-lg">
        Edit <code>src/routes/index.tsx</code> to get started.
      </p>
      <ul>
        <li>
          <SkillCard name="TanStack" />
          <SkillCard name="js" />
          <SkillCard name="mongo" />
        </li>
      </ul> */}
    </div>
  )
}
