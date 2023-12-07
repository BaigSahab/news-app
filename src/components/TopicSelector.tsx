import React from 'react';
import { Chip, Box } from '@mui/material';

interface TopicSelectorProps {
    topic: string;
    setTopic: (topic: string) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topic, setTopic }) => {
    const topics = ['apple', 'meta', 'netflix', 'google', 'twitter', 'tesla'];

    const handleTopicChange = (newTopic: string) => {
        setTopic(newTopic);
    };

    return (
        <div>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '100%',
                px: 3,
            }}>
                {topics.map((t) => (
                    <Chip
                        key={t}
                        label={t}
                        clickable
                        color={t === topic ? 'primary' : 'default'}
                        onClick={() => handleTopicChange(t)}
                        sx={{
                            m: 2
                        }}
                    />
                ))}
            </Box>
        </div>
    );
};

export default TopicSelector;