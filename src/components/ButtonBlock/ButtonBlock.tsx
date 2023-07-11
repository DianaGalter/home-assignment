import { Button } from '@mui/material';
import { HTMLAttributes } from 'react';

type ButtonBlockProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    handler: (event: React.PointerEvent<HTMLButtonElement>) => void;
};

export const ButtonBlock = ({ title, handler }: ButtonBlockProps) => {
    return (
        <>
            <Button onClick={handler} variant="contained">
                {title}
            </Button>
        </>
    );
};
