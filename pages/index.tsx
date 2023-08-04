import Head from "next/head";
import { z } from "zod";

import Container from "../components/layout/Container";

// static props - request through browser - only fetched on build without revalidate interval - faster
// sever props - render at request time - data that needs to be validated first - updates itself when data changes - slower

const CharacterData = z
  .object({
    name: z.string(),
    homeworld: z.string(),
    species: z.array(z.string().url()),
    height: z.coerce.number(),
    starships: z.array(z.string().url()),
  })
  .array();

type CharacterData = z.infer<typeof CharacterData>;

export const getStaticProps = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  const parsedData = CharacterData.parse(data.results);

  return { props: { characters: parsedData } };
};

interface IHomeProps {
  characters: CharacterData;
}

const Home = ({ characters }: IHomeProps) => {
  console.log(characters);
  return (
    <>
      <Head>
        <title>Sandbox</title>
      </Head>
      <Container>
        <ul>
          {characters.map<CharacterData[]>((character) => (
            <li>{character.name}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Home;
