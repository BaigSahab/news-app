import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EastIcon from "@mui/icons-material/East";
import EventIcon from "@mui/icons-material/Event";
import moment from 'moment';
import { INews } from '../NewsModel';

interface INewsProps {
    data: INews
}



const NewsCard: React.FC<INewsProps> = ({ data }) => {
    const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 500, height: '100%', m: "0 auto" }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={data?.urlToImage || fallbackImage}
                    title={data?.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Replace the source with the fallback image on error
                        e.currentTarget.src = fallbackImage;
                    }}
                />
                <CardContent sx={{ paddingTop: "0.5rem" }}>
                    <Typography
                        variant="overline"
                        sx={{ display: "flex", alignItems: "center", color: "grey" }}
                    >
                        <EventIcon sx={{ fontSize: "medium", mr: ".5rem" }} />
                        {moment(data?.publishedAt).format('MMMM DD, YYYY  h:mm A')}
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
                    <Typography variant="body2">
                        <strong>Author:</strong> {data?.author}
                    </Typography>

                    <Typography variant="body2">
                        <strong>Source:</strong> {data?.source?.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ overflow: "hidden", height: "2.5rem", mt: 2 }}
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
