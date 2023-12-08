import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import EventIcon from "@mui/icons-material/Event";
import { INews } from '../NewsModel';
import { useTranslation } from 'react-i18next';

interface INewsProps {
    data: INews,
    language: 'en' | 'ar';
}

const NewsCard: React.FC<INewsProps> = ({ data, language }) => {
    const { t } = useTranslation()
    const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png';
    const dateFormatter = new Intl.DateTimeFormat(language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 500, height: '100%', m: "0 auto" }}>
                <CardMedia
                    sx={{ height: 200 }}
                    component={'img'}
                    image={data?.urlToImage || fallbackImage}
                    title={data?.title}
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        e.currentTarget.src = fallbackImage;
                    }}
                />
                <CardContent sx={{ paddingTop: "0.5rem" }}>
                    <Typography
                        variant="overline"
                        sx={{ display: "flex", alignItems: "center", color: "grey" }}
                    >
                        <EventIcon sx={{ fontSize: "medium", mr: ".5rem" }} />
                        {dateFormatter.format(new Date(data?.publishedAt))}
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
                        <strong>{t('Author')}</strong><br /> {data?.author}
                    </Typography>

                    <Typography variant="body2">
                        <strong>{t('Source')}</strong><br /> {data?.source?.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ overflow: "hidden", height: "2.5rem", mt: 2 }}
                    >
                        {data?.description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to={`${data?.url}`} target={"_blank"} rel="noopener noreferrer">
                        <Button
                            variant="text"
                            size="small"
                            endIcon={language === 'ar' ? <WestIcon /> : <EastIcon />}
                            sx={{ fontWeight: "600" }}
                        >
                            {t('Read more')}
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default NewsCard
