import Image from "next/image";

function Instagram() {
  return (
    <a
      href="mailto:hello@kamyabinetwork.com?subject=Requesting%20Invite%20to%20Kamyabi%20Network&body=Hi%20Kamyabi%20Team,%0A%0AI’m%20interested%20in%20joining%20the%20community.%20Please%20let%20me%20know%20how%20to%20get%20access.%0A%0AThanks,%0A[Your%20Name]"
      target="_blank"
      rel="noopener"
      className="relative w-14 h-14 flex-shrink-0 rounded-lg border border-gray-800 overflow-hidden"
    >
      <Image
        src="/instagram_icon.svg"
        alt="Instagram"
        width={59}
        height={59}
        className="w-full h-full object-cover"
      />
    </a>
  );
}

export default Instagram;
