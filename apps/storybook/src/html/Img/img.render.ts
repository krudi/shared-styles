import type { ImgArgs } from './img.types';

const sampleSrc = 'https://placehold.co/600x400';

export const renderImg = ({ alt }: ImgArgs): string => `
    <picture>
        <img src="${sampleSrc}" alt="${alt}" />
    </picture>
`;

export const renderImgPlayground = (args: ImgArgs): string => renderImg(args);
