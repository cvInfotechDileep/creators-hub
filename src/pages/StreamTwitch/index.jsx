import React, { useEffect, useRef } from 'react';
import "./../dashboard.scss"

const StreamTwitch = ({ channel, width, height }) => {
    const embedContainer = useRef(null);

    useEffect(() => {
        if (document.getElementById('twitch-embed-script')) {
            createEmbed();
        } else {
            const script = document.createElement('script');
            script.id = 'twitch-embed-script';
            script.src = 'https://embed.twitch.tv/embed/v1.js';
            script.async = true;
            script.onload = createEmbed;
            document.body.appendChild(script);
        }

        return () => {
            if (embedContainer.current) {
                embedContainer.current.innerHTML = '';
            }
        };
    }, [channel, width, height]);

    const createEmbed = () => {
        if (embedContainer.current) {
            new window.Twitch.Embed(embedContainer.current.id, {
                width: width || '100%',
                height: height || '600',
                channel: channel || 'jynxzi_streams_'
            });
        }
    };
    return (
        <div ref={embedContainer} id="twitch-embed" />
    )
}

export default StreamTwitch