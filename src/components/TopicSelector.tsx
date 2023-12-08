import React from 'react';
import { Chip, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TopicSelectorProps {
    topic: string;
    setTopic: (topic: string) => void;
}

const TopicSelector: React.FC<TopicSelectorProps> = ({ topic, setTopic }) => {
    const { t } = useTranslation()
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
                {topics.map((option) => (
                    <Chip
                        key={option}
                        label={t(option.toUpperCase())}
                        clickable
                        color={option === topic ? 'primary' : 'default'}
                        onClick={() => handleTopicChange(option)}
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