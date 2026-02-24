import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: { size: 32, text: 'text-base' },
  md: { size: 48, text: 'text-xl' },
  lg: { size: 64, text: 'text-3xl' },
};

export function Logo({
  size = 'md',
  showText = true,
  className = '',
}: LogoProps) {
  const sizes = sizeClasses[size];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Image
        src="/images/logo_no_text.png"
        alt="Concordia Commerce"
        width={sizes.size}
        height={sizes.size}
      />
      {showText && (
        <span className={`font-heading font-semibold ${sizes.text}`}>
          CONCORDIA
        </span>
      )}
    </div>
  );
}
