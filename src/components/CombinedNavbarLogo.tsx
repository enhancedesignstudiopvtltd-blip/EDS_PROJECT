import React, { useEffect, useState } from 'react';
import combinedLogo from '@/EDS1.jpeg';

const CombinedNavbarLogo: React.FC = () => {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const targetHeight = Math.round(50 * dpr);

    const logoImg = new Image();
    logoImg.src = combinedLogo;
    logoImg.crossOrigin = 'anonymous';
    logoImg.onload = () => {
      const logoHeight = targetHeight;
      const scale = logoHeight / logoImg.height;
      const logoWidth = Math.round(logoImg.width * scale);

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const fontSize = Math.round(18 * dpr);
      ctx.font = `600 ${fontSize}px Space Grotesk, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
      const text = 'Enhance Design Studio Pvt. Ltd.';
      const textMetrics = ctx.measureText(text);
      const textWidth = Math.ceil(textMetrics.width);

      const paddingX = Math.round(16 * dpr);
      const paddingY = Math.round(6 * dpr);
      const totalWidth = logoWidth + paddingX + textWidth;
      const totalHeight = logoHeight + paddingY * 2;

      canvas.width = totalWidth;
      canvas.height = totalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(logoImg, 0, paddingY, logoWidth, logoHeight);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        if (a === 0) continue;
        if (luminance < 0.12) {
          data[i + 3] = 0;
        } else {
          data[i] = 255;
          data[i + 1] = 255;
          data[i + 2] = 255;
          data[i + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);

      const url = canvas.toDataURL('image/png');
      setSrc(url);
    };
  }, []);

  if (!src) return null;

  return <img src={src} alt="Enhance Design Studio Pvt. Ltd." className="navbar-logo" />;
};

export default CombinedNavbarLogo;
