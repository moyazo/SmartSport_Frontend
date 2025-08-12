import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import { Props } from './props';

const LandingText = (props: Props) => {
    return (
        <p id="LandingTitle">
            <MuiLink
                component={NextLink} // usa NextLink internamente
                href={props.href} // navegación SPA de Next
                sx={props.sx} // estilos con sistema MUI
            >
                {props.titleContent}
            </MuiLink>
        </p>
    );
};

export default LandingText;
