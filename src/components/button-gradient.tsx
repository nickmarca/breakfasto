export default function ButtonGradient(props: React.ComponentProps<'button'>) {
  const { children } = props;
  return (
    <button
      {...props}
      className="py-2.5 px-14 bg-gradient-to-r from-yellow-orange to-neon-carrot text-white text-sm font-sans font-semibold rounded-lg shadow-[0_15px_15px_-10px_rgba(135,144,178,0.65)] tracking-wider"
    >
      {children}
    </button>
  );
}
