import { Button, Link, LinkOverlay } from '@chakra-ui/react';
import { SiSubstack } from '@icons-pack/react-simple-icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export type LinkButtonProps = {
  href: string;
  label: string;
  overlay?: boolean;
  target?: string;
  rel?: string;
  icon?: any;
};

export const LinkButton = ({
  href,
  label,
  icon,
  overlay,
  ...rest
}: LinkButtonProps) => {
  const IconButton = (icon: String) => {
    switch (icon) {
      case 'FaGithub':
        return <FaGithub />;

      case 'FaLinkedin':
        return <FaLinkedin />;

      case 'SiSubstack':
        return <SiSubstack />;

      default:
        return <></>;
    }
  };

  return (
    <>
      {overlay ? (
        <LinkOverlay
          textTransform="lowercase"
          fontSize="xs"
          fontWeight="bold"
          color="green.500"
          mt={2}
          href={href}
          isExternal
          {...rest}
        >
          <Button
            variant={!!icon ? 'solid' : 'outline'}
            leftIcon={IconButton(icon)}
          >
            {label}
          </Button>
        </LinkOverlay>
      ) : (
        <Link
          textTransform="lowercase"
          fontSize="xs"
          fontWeight="bold"
          color="green.500"
          mt={2}
          href={href}
          isExternal
          {...rest}
        >
          <Button
            variant={icon ? 'solid' : 'outline'}
            leftIcon={IconButton(icon)}
          >
            {label}
          </Button>
        </Link>
      )}
    </>
  );
};
