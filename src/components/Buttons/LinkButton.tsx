import { Button, Link, LinkOverlay } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export type LinkButtonProps = {
  href: string;
  label: string;
  overlay?: boolean;
  target?: string;
  rel?: string;
  icon?: React.JSX.Element;
  disabled?: boolean;
};

export const LinkButton = ({
  href,
  label,
  icon,
  overlay,
  disabled,
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
            data-linkid={label}
            variant={!icon ? 'outline' : 'solid'}
            leftIcon={icon}
            isDisabled={disabled}
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
            data-linkid={label}
            variant={icon ? 'solid' : 'outline'}
            isDisabled={disabled}
            leftIcon={
              icon ? (
                typeof icon === 'string' ? (
                  icon === '<FaGithub />' ? (
                    <FaGithub />
                  ) : undefined
                ) : (
                  icon
                )
              ) : undefined
            }
          >
            {label}
          </Button>
        </Link>
      )}
    </>
  );
};
