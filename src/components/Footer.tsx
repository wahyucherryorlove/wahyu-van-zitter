import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-[#333333]">
      <h6 className="text-neutral-50 text-sm">
        Copyright &copy;2023 All rights reserved 💥 by{" "}
        <Link
          href="https://www.instagram.com/wahyudix15/"
          rel="noreferrer"
          target="_blank"
          className="text-[#939393]"
        >
          Wahyudi Umar
        </Link>
      </h6>
    </footer>
  );
};

export { Footer };
