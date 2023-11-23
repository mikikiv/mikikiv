import { Button, Link, LinkOverlay } from '@chakra-ui/react';
import { ReactElement } from 'react';

export type LinkButtonProps = {
  href: string;
  label: string;
  overlay?: boolean;
  target?: string;
  rel?: string;
  icon?: ReactElement;
};

export const LinkButton = ({
  href,
  label,
  icon,
  overlay,
  ...rest
}: LinkButtonProps) => {
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
            className="linkButton"
            data-linkId={label}
            variant={!!icon ? 'solid' : 'outline'}
            leftIcon={icon}
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
            className="linkButton"
            data-linkId={label}
            variant={icon ? 'solid' : 'outline'}
            leftIcon={icon}
          >
            {label}
          </Button>
        </Link>
      )}
    </>
  );
};
