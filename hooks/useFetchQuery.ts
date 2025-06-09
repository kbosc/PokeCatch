import { useQuery } from '@tanstack/react-query';

const endpoint = 'https://pokeapi.co/api/v2';
export function useFetchQuery(path: string) {

    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            await wait(1); // Simulate network delay
            return fetch(endpoint + path).then((response) => response.json())
        }
    })
  };

function wait (duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration * 1000));
}