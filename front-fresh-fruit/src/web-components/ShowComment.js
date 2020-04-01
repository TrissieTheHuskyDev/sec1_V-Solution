import React, { useState, useEffect } from 'react';
import { Container,Col } from 'react-bootstrap'

function Comment(name, desc) {
    return (
        <div>
            <Container >
                <Col class="card w-75">
                    <div class="card-body">
                       <h5 class="card-title">{name}</h5>
                       <p class="card-text">{desc}</p>
                    </div>
                </Col>
            </Container>
        </div>
    )
}

const ShowComment = (props) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        setComment(props.comment)
        console.log('this is comment')
        console.log(comment)
        console.log('this is comment')
    }, [props])

    return (
        <div >
            <div class="container">
                <div class="row row-card">
                    {comment.length!==0 ? 
                    comment.map((item) => Comment(item.poster_user,item.text))
                    : <div>Dont have any comment</div>}
                </div>
            </div>
        </div>
    );
};

export default ShowComment;