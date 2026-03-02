'use client';

import { useTranslation } from 'react-i18next';
import { Button, Icon, Badge } from '@/shared/ui';

export function NotificationBadge() {
  const { t } = useTranslation('common');
  const notificationCount: number = 1;

  return (
    <Badge
      content={notificationCount}
      color="danger"
      variant="solid"
      isInvisible={notificationCount === 0}
      shape="circle"
      placement="top-right"
      size="sm"
      showOutline={false}
      classNames={{
        badge: 'bg-accent-500 text-white -translate-x-0.5 -translate-y-0.5',
      }}
    >
      <Button isIconOnly variant="light" aria-label={t('topbar.notifications')}>
        <Icon name="bell" size={20} />
      </Button>
    </Badge>
  );
}
