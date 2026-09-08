import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Le dépôt vit sur un disque exFAT (KING KONG) : macOS y écrit un fichier
    // AppleDouble « ._nom.webp » à côté de chaque variante du cache d'images.
    // Next relit ce dossier et sert ce fichier de 4 Ko en application/octet-stream
    // dès que le navigateur demande du webp/avif — toutes les images restaient noires.
    // L'optimiseur est donc coupé en local ; en production (Linux) il tourne normalement.
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
