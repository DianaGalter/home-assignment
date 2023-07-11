import { Button } from '@mui/material';
import { HTMLAttributes } from 'react';
import { Root } from './styles.css';

type ButtonBlockProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    handler: (event: React.PointerEvent<HTMLButtonElement>) => void;
};

export const ButtonBlock = ({ title, handler }: ButtonBlockProps) => {
    return (
        <Root>
            <Button onClick={handler} variant="contained">
                {title}
            </Button>
        </Root>
    );
};
