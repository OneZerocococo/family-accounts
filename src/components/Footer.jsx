const Footer = () => {
  return (
    <footer className="flex justify-between px-4">
      <p className="text-sm font-light my-8">
        餘額： <span>10000</span>
      </p>
      <button className="p-0 border-0 bg-none align-baseline appearance-none cursor-pointer outline-none text-sm font-light my-8 hover:underline">
        登出
      </button>
    </footer>
  );
};

export default Footer;
