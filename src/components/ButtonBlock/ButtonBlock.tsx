import { Button } from '@mui/material';
import { Root } from './styles.css';

type ButtonBlockProps = {
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
