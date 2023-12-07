import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EastIcon from "@mui/icons-material/East";
import EventIcon from "@mui/icons-material/Event";


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

interface INewsProps {
    data: INews
}



const NewsCard: React.FC<INewsProps> = ({ data }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 500, height: 450, m: "0 auto" }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={data?.urlToImage}
                    title={data?.title}
                />
                <CardContent sx={{ paddingTop: "0.5rem" }}>
                    <Typography
                        variant="overline"
                        sx={{ display: "flex", alignItems: "center", color: "grey" }}
                    >
                        <EventIcon sx={{ fontSize: "medium", mr: ".5rem" }} />
                        {data?.publishedAt}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            lineHeight: "1.2rem",
                            mb: ".5rem",
                            mt: ".5rem",
                        }}
                    >
                        {data?.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ overflow: "hidden", height: "2.5rem" }}
                    >
                        {data?.description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to={`${data?.url}`}>
                        <Button
                            variant="text"
                            size="small"
                            endIcon={<EastIcon />}
                            sx={{ fontWeight: "600" }}
                        >
                            Read more
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default NewsCard
