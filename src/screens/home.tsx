import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import TopicSelector from '../components/TopicSelector';
import { Grid, Container, CircularProgress, Box, Alert, AlertTitle } from '@mui/material';
import NewsCard from '../components/NewsCard';
import moment from 'moment';
import { INews } from '../NewsModel';
import { useTranslation } from 'react-i18next';

interface IHomeProps {
    language: 'en' | 'ar'
}

const Home: React.FC<IHomeProps> = ({ language }) => {

    const { t } = useTranslation()

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
                    `https://newsapi.org/v2/everything?q=${topic}&language=${language}&sortBy=publishedAt&from=${moment().subtract(7, 'days').format('YYYY-MM-DD')}&to=${moment().format('YYYY-MM-DD')}&apiKey=${import.meta.env.VITE_NEWS_API_KEY} `
                );
                setNews(response.data?.articles);

                setLoading(false);
            } catch (e: unknown) {
                setLoading(false);
                const errorMessage = (e as AxiosError)?.response?.data?.message || (e as AxiosError)?.message;
                setError(errorMessage);
            }
        }
        fetchNews();
    }, [topic, language]);


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
                    {news.length ? news.map((item, index) => (
                        <NewsCard key={index} data={item} language={language} />
                    )) : <Alert severity="info">
                        <AlertTitle>No News Found</AlertTitle>
                        Check back again — Or browser other topics
                    </Alert>}
                </Grid>
                }
            </Container>
        </div>
    )
}

export default Home
