import { SxProps, Theme } from '@mui/material';
import React from 'react';

export type Props = {
    display: string;
    align: string;
    justify: string;
    flexFlow?: string; // opcional, si se necesita
    className?: string; // para Tailwind o clases CSS personalizadas
    sx?: SxProps<Theme>;
    childcomponents?: React.ReactNode[]; // estilos MUI
};
