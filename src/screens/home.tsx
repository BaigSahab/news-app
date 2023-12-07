import React, { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

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

const options = ["apple", "meta", "netflix", "google", "twitter", "tesla"]

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
                    `https://newsapi.org/v2/everything?q=${topic}`
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

    const handleTopicChange = (e: string) => {
        setTopic(e)
    }

    return (
        <div>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 3,
                mb: 5
            }}>
                {options.map((option) => (
                    <Chip
                        key={option}
                        label={option}
                        clickable
                        color={option === topic ? 'primary' : 'default'}
                        onClick={() => handleTopicChange(option)}
                        sx={{
                            m: 3
                        }}
                    />
                ))}
            </Box>
        </div>
    )
}

export default Home
