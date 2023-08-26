import { useTheme } from '@emotion/react';

const Dot = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        borderRadius: '50%',
        height: '4px',
        width: '4px',
        background: `${theme.color.greyLight}`
      }}
    />
  );
};

export default Dot;
