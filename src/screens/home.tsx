import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import TopicSelector from '../components/TopicSelector';
import { Grid, Container, CircularProgress, Box, Alert, AlertTitle } from '@mui/material';
import NewsCard from '../components/NewsCard';

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
                setError((e as AxiosError)?.response?.data?.message || (e as AxiosError)?.message);
            }
        }
        fetchNews();
    }, [topic]);


    return (
        <div>
            <TopicSelector topic={topic} setTopic={setTopic} />
            <Container sx={{ padding: { xs: '2rem', md: '2rem' } }}>
                {loading &&
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <CircularProgress />
                    </Box>}
                {error && <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>}
                {!loading && !error && <Grid container spacing={3} my={1}>
                    {news?.map((item) => (
                        <NewsCard key={item.id} data={item} />
                    ))
                    }
                </Grid>
                }
            </Container>
        </div>
    )
}

export default Home
