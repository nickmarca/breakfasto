import classNames from 'classnames';

export default function ButtonOutlinedRounded(
  props: React.ComponentProps<'button'>,
) {
  const { children } = props;
  return (
    <button className={classNames(styles.button, styles.text)}>
      {children}
    </button>
  );
}

const styles = {
  button: ['rounded-full', 'border', 'border-stone-200', 'px-8', 'py-1'],
  text: [
    'text-stone-100',
    'text-sm',
    'font-sans',
    'font-semibold',
    'tracking-wider',
  ],
};
