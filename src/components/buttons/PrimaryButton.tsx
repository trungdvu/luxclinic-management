import React from 'react';
import classNames from 'classnames';
import { Button, ButtonProps } from 'antd';

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  style,
  loading,
  ...props
}) => {
  const classes = React.useMemo(
    () =>
      classNames(
        'text-sm font-medium flex items-center border-2 bg-button-pri border-button-pri hover:bg-button-pri-hv hover:border-button-pri-hv',
        {
          'border-none bg-button-pri opacity-50 hover:cursor-not-allowed hover:bg-button-pri':
            loading,
        },
        className,
      ),
    [className, loading],
  );

  const styles = React.useMemo(
    () => ({
      minWidth: '150px',
      ...style,
    }),
    [style],
  );

  return (
    <Button
      shape="round"
      size="large"
      loading={loading}
      className={classes}
      style={styles}
      {...props}
    >
      {children}
    </Button>
  );
};
