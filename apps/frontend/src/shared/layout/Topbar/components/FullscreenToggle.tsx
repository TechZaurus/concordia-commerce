'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Icon } from '@/shared/ui';

export function FullscreenToggle() {
  const { t } = useTranslation('common');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  return (
    <Button
      isIconOnly
      variant="light"
      onPress={toggleFullscreen}
      aria-label={t('topbar.toggleFullscreen')}
    >
      <Icon name={isFullscreen ? 'minimize' : 'maximize'} size={20} />
    </Button>
  );
}
