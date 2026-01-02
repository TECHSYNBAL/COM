import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen w-full flex-col items-center bg-white"
      style={{ padding: "60px 0px 0px 0px" }}
    >
      <a
        href="https://techsynbal.com/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/logo.svg"
          alt="TECHSYMBAL logo"
          width={405}
          height={120}
          className="h-auto w-auto object-contain"
          style={{
            maxWidth: "calc(100vw - 120px)", // shrink if space is limited
          }}
          priority
        />
      </a>
      <Image
        src="/techsynbal.png"
        alt="TECHSYMBAL"
        priority
        width={1536}
        height={1024}
        className="h-auto w-auto object-contain"
        style={{
          maxHeight: "calc(100vh - 330px)",
          maxWidth: "calc(100vw - 120px)",
          padding: "30px 0px 30px 0px"
        }}
        sizes="(max-width: 768px) 100vw, 100vw"
      />
      <div className="mt-8 flex items-center justify-center gap-5">
        {[
          { 
            href: "https://x.com/TECHSYNBAL", 
            src: "/socials/01_x.svg", 
            alt: "X" 
          },
          {
            href: "https://t.me/TECHSYNBAL",
            src: "/socials/02_telegram.svg",
            alt: "Telegram",
          },
          {
            href: "https://github.com/HYPEANDLINKS",
            src: "/socials/GitHub.svg",
            alt: "GitHub",
          },
          {
            href: "https://www.youtube.com/@techsynbal",
            src: "/socials/03_youtube.svg",
            alt: "YouTube",
          },
          {
            href: "https://www.instagram.com/techsynbal/",
            src: "/socials/04_meta.svg",
            alt: "Meta",
          },
        ].map((social) => (
          <a
            key={social.src}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={social.src}
              alt={social.alt}
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
            />
          </a>
        ))}
      </div>
    </main>
  );
}