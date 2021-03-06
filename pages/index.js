import Head from 'next/head'
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Results from "../components/Results/Results";
import axios from "axios";
import requests from "../utils/requests";

export default function Home({results}) {

    return (
        <div>
            <Head>
                <title>Movie-app</title>
                <meta name="description" content="Movie-app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <Nav/>

            <Results results={results}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;

    const request = await axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.Trending.url}`)

    return {
        props: {
            results: request.data.results
        }
    }
}
