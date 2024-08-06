import React from 'react';
import "./../dashboard.scss"
import { Col, Container, Row } from 'react-bootstrap';

const StreamYoutube = ({ videoId, width, height }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    const chatUrl = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`;
    return (
        <Container>
            <Row>
                <Col xl='9'>
                    <div className="video-container" style={{ width: width || '100%', height: height || '480px' }}>
                        <iframe
                            width="100%"
                            height="550"
                            src={embedUrl}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="YouTube live stream" 
                        ></iframe>
                    </div>
                </Col>
                <Col xl='3'>
                    <div className="chat-container" style={{ width: width || '100%', height: height || '480px' }}>
                        <iframe
                            width="100%"
                            height="550"
                            src={chatUrl}
                            frameBorder="0"
                            allowFullScreen
                            title="YouTube live chat"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default StreamYoutube