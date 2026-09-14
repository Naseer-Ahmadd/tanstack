import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
        GET: async (request) => {
            console.log('GET request received at /api/hello');
            return Response.json({ message: 'Hello from the server!' },{
                headers: { 
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*', 
                    'cache-control': 'no-store'
                    }
                }

            );
        }
    }
  }
})