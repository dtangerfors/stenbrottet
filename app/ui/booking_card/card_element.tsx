const Label = ({ children }: { children: any }) => (
  <span className="block text-xs uppercase text-gray-400 font-medium leading-none pb-2 dark:text-gray-300">
    {children}
  </span>
);

const Title = ({ children }: { children: any }) => (
  <p className="text-black-900 text-headline dark:text-white">{children}</p>
);

export { Label, Title };
