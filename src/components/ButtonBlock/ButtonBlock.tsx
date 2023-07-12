import { Button } from '@mui/material';
import { HTMLAttributes } from 'react';
import { Root } from './styles.css';

type ButtonBlockProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClick: (event: React.PointerEvent<HTMLButtonElement>) => void;
};

export const ButtonBlock = ({ title, onClick }: ButtonBlockProps) => {
    return (
        <Root>
            <Button onClick={onClick} variant="contained">
                {title}
            </Button>
        </Root>
    );
};
