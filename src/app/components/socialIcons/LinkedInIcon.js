import Image from "next/image";
function LinkedInIcon() {
  return (
    <a
      href="https://www.linkedin.com/company/kamyabi-network/"
      target="_blank"
      rel="noopener"
      className="relative w-14 h-14 flex-shrink-0 rounded-lg border border-gray-800 overflow-hidden"
    >
      <Image
        src="/linkedIn_icon.svg"
        alt="Linkedin"
        width={59}
        height={59}
        className="w-full h-full object-cover"
      />
    </a>
  );
}

export default LinkedInIcon;
