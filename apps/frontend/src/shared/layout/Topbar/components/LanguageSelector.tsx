'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MenuPopup, Button } from '@/shared/ui';
import GB from 'country-flag-icons/react/3x2/GB';
import RS from 'country-flag-icons/react/3x2/RS';

const languages = [
  { code: 'en', label: 'English', FlagComponent: GB },
  { code: 'sr', label: 'Српски', FlagComponent: RS },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  const CurrentFlag = currentLanguage.FlagComponent;

  return (
    <MenuPopup
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom-end"
      trigger={
        <Button
          variant="light"
          className="gap-1.5 px-2 min-w-0"
          aria-label={`Current language: ${currentLanguage.label}`}
        >
          <CurrentFlag className="w-5 h-4" />
          <span className="text-sm font-medium">
            {currentLanguage.code.toUpperCase()}
          </span>
        </Button>
      }
    >
      <div className="min-w-[160px]">
        {languages.map(lang => {
          const FlagComponent = lang.FlagComponent;
          return (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-default-100 transition-colors ${
                lang.code === i18n.language ? 'bg-default-50' : ''
              }`}
            >
              <FlagComponent className="w-6 h-4" />
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    </MenuPopup>
  );
}
