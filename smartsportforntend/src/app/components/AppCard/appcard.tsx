import { Box } from '@mui/material';
import { Props } from './props';
import { ReactNode } from 'react';

interface AppCardProps extends Props {
    children?: ReactNode;
}

const AppCard: React.FC<AppCardProps> = ({
    align,
    justify,
    flexFlow,
    children,
    childcomponents,
    sx,
    ...rest
}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: align,
                justifyContent: justify,
                flexFlow,
                ...sx,
            }}
            {...rest}>
            {childcomponents || children}
        </Box>
    );
};

export default AppCard;
