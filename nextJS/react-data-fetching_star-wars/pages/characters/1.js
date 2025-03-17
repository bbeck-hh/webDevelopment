import { useState } from "react";
import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Character() {

  const [id, setId] = useState(3);

  const { data, error, isLoading } = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;


  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
