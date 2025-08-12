import Image, { ImageProps } from 'next/image';
import { Box, SxProps, Theme } from '@mui/material';
import { Props } from './props';

// Extendemos las props para soportar Tailwind y MUI
interface AppImgProps extends Omit<ImageProps, keyof Props>, Props {
    className?: string; // Tailwind o clases CSS
    sx?: SxProps<Theme>; // Estilos MUI
    containerClassName?: string; // Clases para el contenedor
}

const AppImg = ({
    src,
    alt = 'App Image',
    className,
    sx,
    width,
    height,
    containerClassName,
    ...rest
}: AppImgProps) => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
                borderRadius: '50%',
                position: 'relative',
                ...sx, // el tamaño se maneja 100% aquí
            }}
            className={containerClassName}>
            <Image
                fill
                style={{ objectFit: 'cover' }}
                src={src}
                alt={alt}
                className={className}
                {...rest}
            />
        </Box>
    );
};

export default AppImg;
