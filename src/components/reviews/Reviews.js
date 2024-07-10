import {useEffect, useRef, useState} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import {ReviewForm} from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({ getMovieData, movie }) => {
    const revText = useRef();
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieData(movieId);
        fetchReviews(movieId);
    }, [movieId]);

    const fetchReviews = async (movieId) => {
        try {
            const response = await api.get(`/api/v1/reviews/${movieId}`);
            setReviews(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movieId
            });
            
            // Após adicionar uma nova review, atualiza a lista de reviews
            fetchReviews(movieId);

            rev.value = "";
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?" />
                            </Col>
                        </Row>
                        <Row>
                            <Col><hr /></Col>
                        </Row>
                    </>
                    {
                        reviews.map((r, index) => (
                            <div key={index}>
                                <Row>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col><hr /></Col>
                                </Row>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
        </Container>
    );
}

export default Reviews;