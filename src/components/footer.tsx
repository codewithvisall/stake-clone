import type React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15232D] pt-12 pb-6 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top section with logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-800">
          <div>
            <img src="/logo.svg" alt="Stake" className="h-8 mb-2" />
            <p className="text-sm text-gray-400">
              © {currentYear} Stake.com | All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <SocialIcon name="Discord" icon="📱" />
            <SocialIcon name="Twitter" icon="🐦" />
            <SocialIcon name="Facebook" icon="📘" />
            <SocialIcon name="Instagram" icon="📷" />
            <SocialIcon name="YouTube" icon="📺" />
            <SocialIcon name="Telegram" icon="📨" />
            <SocialIcon name="TikTok" icon="🎵" />
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FooterColumn title="casino">
            <FooterLink href="#">Casino Games</FooterLink>
            <FooterLink href="#">slot</FooterLink>
            <FooterLink href="#">Live Casino</FooterLink>
            <FooterLink href="#">Roulette</FooterLink>
            <FooterLink href="#">Blackjack</FooterLink>
            <FooterLink href="#">poker</FooterLink>
            <FooterLink href="#">Provider</FooterLink>
            <FooterLink href="#">Promotion & Competition</FooterLink>
          </FooterColumn>

          <FooterColumn title="sports">
            <FooterLink href="#">Sportsbook</FooterLink>
            <FooterLink href="#">Live Sports</FooterLink>
            <FooterLink href="#">soccer</FooterLink>
            <FooterLink href="#">basketball</FooterLink>
            <FooterLink href="#">tennis</FooterLink>
            <FooterLink href="#">eSports</FooterLink>
            <FooterLink href="#">Bonus Betting</FooterLink>
            <FooterLink href="#">Sports Rules</FooterLink>
            <FooterLink href="#">Racing Rules</FooterLink>
          </FooterColumn>

          <FooterColumn title="backup">
            <FooterLink href="#" hasIcon>
              Help Center
            </FooterLink>
            <FooterLink href="#">Fairness</FooterLink>
            <FooterLink href="#" hasIcon>
              Gambling Counseling
            </FooterLink>
            <FooterLink href="#">Real-time support</FooterLink>
            <FooterLink href="#">Block myself</FooterLink>
          </FooterColumn>

          <div className="space-y-8">
            <FooterColumn title="About us">
              <FooterLink href="#">VIP Club</FooterLink>
              <FooterLink href="#">coalition</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">AML Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
            </FooterColumn>

            <FooterColumn title="Payment Information">
              <FooterLink href="#">Deposits & Withdrawals</FooterLink>
              <FooterLink href="#">Currency Guide</FooterLink>
              <FooterLink href="#">Crypto Guide</FooterLink>
              <FooterLink href="#">Supported Cryptocurrencies</FooterLink>
              <FooterLink href="#">
                How to use the safe Betting amount
              </FooterLink>
            </FooterColumn>
          </div>
        </div>

        {/* Cryptocurrency logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <CryptoLogo name="litecoin.svg" />
          <CryptoLogo name="bitcoin.svg" />
          <CryptoLogo name="ethereum.svg" />
          <CryptoLogo name="tron.svg" />
          <CryptoLogo name="dogecoin.svg" />
          <CryptoLogo name="bitcoin-cash.svg" />
          <CryptoLogo name="tether.svg" />
        </div>

        {/* Gambling logos */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <GamblingLogo name="hub88.svg" />
          <GamblingLogo name="safe-gamble.svg" />
          <GamblingLogo name="betblocker.svg" />
          <GamblingLogo name="18+.svg" />
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <PartnerLogo name="hub88.svg" label="VERIFIED OPERATOR" />
          <PartnerLogo name="logo.svg" label="EXCLUSIVE TITLE PARTNER" />
          <PartnerLogo name="everton-logo.svg" label="MAIN PARTNER" />
          <PartnerLogo
            name="ufc-partner.svg"
            label="OFFICIAL BETTING PARTNER"
          />
        </div>

        {/* Responsible gambling text */}
        <div className="text-center text-sm text-gray-400 mb-8">
          <p>
            Stake is committed to responsible gambling. For more information,
            visit{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              Gamblingtherapy.org
            </Link>
          </p>
        </div>

        {/* Legal information */}
        <div className="text-center text-xs text-gray-500 mb-8 max-w-4xl mx-auto">
          <p className="mb-4">
            Stake is owned and operated by Medium Rare NV (registration number:
            145353, registered address: Korporaalweg 10, Willemstad, Curaçao).
            For further inquiries, please contact support@stake.com. The payment
            processor is Medium Rare Limited, registered at 7-9 Riga Feraios,
            LIZANTIA COURT, Office 310, Agioi Omologites, 1087 Nicosia, Cyprus,
            registered number HE 410775.
          </p>
        </div>

        {/* Contact information */}
        <div className="text-center text-xs text-gray-500">
          <p>
            backup{" "}
            <Link
              href="mailto:support@stake.com"
              className="text-blue-400 hover:underline"
            >
              support@stake.com
            </Link>{" "}
            | partner{" "}
            <Link
              href="mailto:partners@stake.com"
              className="text-blue-400 hover:underline"
            >
              partners@stake.com
            </Link>{" "}
            | The press{" "}
            <Link
              href="mailto:press@stake.com"
              className="text-blue-400 hover:underline"
            >
              press@stake.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <Link
      href="#"
      className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
      title={name}
    >
      <span className="text-lg">{icon}</span>
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  hasIcon = false,
}: {
  href: string;
  children: React.ReactNode;
  hasIcon?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
      >
        {children}
        {hasIcon && <ExternalLink size={14} />}
      </Link>
    </li>
  );
}

function CryptoLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
      <img src={`/${name}`} alt={name} className="h-6" />
    </div>
  );
}

function GamblingLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
      <img src={`/${name}`} alt={name} className="h-8" />
    </div>
  );
}

function PartnerLogo({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <img src={`/${name}`} alt={name} className="h-10 mb-2" />
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}
