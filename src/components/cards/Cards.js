import React from 'react'
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './card.css'

const Cards = ({ books }) => {
    console.log(books);

    return (
        <>
            <div className="card__wrap">
                {
                    books.map((item) => {
                        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

                        if (thumbnail !== undefined) {
                            return (
                                <>
                                    <div className="card__item">
                                        <Card sx={{ maxWidth: 345 }} className="card__inner">
                                            <CardHeader
                                                title={item.volumeInfo.title}
                                            />
                                            <CardMedia
                                                className='card__img'
                                                component="img"
                                                height="194"
                                                image={thumbnail}
                                                alt="Paella dish"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    Author : {item.volumeInfo.authors[0]}
                                                    Publisher : {item.volumeInfo.publisher}
                                                    Published Date : {item.volumeInfo.publishedDate}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon />
                                                </IconButton>
                                                <Button variant="contained" rel="noopener noreferrer" href={item.volumeInfo.previewLink}>
                                                    More
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                </>
                            )
                        }

                    })
                }

            </div>
        </>
    )
}

export default Cards