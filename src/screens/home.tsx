import React, { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import TopicSelector from '../components/TopicSelector';

interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string; }
    id: string;
    name: string;
    title: string;
    url: string;
    urlToImage: string;
}

const Home: React.FC = () => {

    const [news, setNews] = useState<INews[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [topic, setTopic] = useState<string>("apple")
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setError("");
                setLoading(true);
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=${topic}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
                );
                setNews(response.data?.articles);

                setLoading(false);
            } catch (e: unknown) {
                setLoading(false);
                setError((e as AxiosError).message);
            }
        }
        fetchNews();
    }, [topic]);


    return (
        <div>
            <TopicSelector topic={topic} setTopic={setTopic} />
        </div>
    )
}

export default Home
