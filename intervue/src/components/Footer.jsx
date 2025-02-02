import { MoveUpRight } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    social: [
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
    company: [
      { name: 'So gehts', href: '#' },
      { name: 'Erfahrung', href: '#' },
      { name: 'Aligner', href: '#' },
      { name: 'Preise', href: '#' },
      { name: 'Standorte', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Offene Stellen', href: '#' },
      { name: 'Presse kit', href: '#' },
    ],
    product: [
      { name: 'Gratis Termin', href: '#' },
      { name: 'Preunde einladen', href: '#' },
      { name: 'Patienteninforma', href: '#' },
    ],
    product2: [
      { name: 'Blog', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'UH Media', href: '#' },
      { name: 'Offene Stellen', href: '#' },
      { name: 'Presse kit', href: '#' },
    ],
    legal: [
      { name: 'Datenschutz', href: '#' },
      { name: 'Impressum', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'AGBs', href: '#' },
    ],
  };

  return (
    <footer className="bg-[#202123] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="mb-16">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/648175fc7332de3fb931061a_intervue.svg"
              alt="Logo"
              className="object-contain"
            />
          </div>

          {/* Social links */}
          <div className='flex flex-wrap justify-between gap-8 mb-8'>
            <div className="block w-full sm:w-auto">
              <div className="flex flex-wrap gap-6 mb-8">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Hire better & faster</h3>
                <div className="flex flex-wrap gap-4 max-w-sm">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="bg-transparent border-b border-gray-600 flex-grow pb-2 focus:outline-none focus:border-white"
                  />
                  <button className="text-amber-400">
                    <MoveUpRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Main links flex container */}
            <div className="flex flex-wrap gap-8 w-full sm:w-auto">
              <div className="w-full sm:w-1/2 md:w-1/5">
                <h3 className="text-white uppercase text-sm font-medium mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-400 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <h3 className="text-white uppercase text-sm font-medium mb-4">Resources</h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-400 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <h3 className="text-white uppercase text-sm font-medium mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-400 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full sm:w-1/2 md:w-1/5">
                <h3 className="text-white uppercase text-sm font-medium mb-4">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product2.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-sm text-gray-400 hover:text-white">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2023 Intervue. Crafted by great minds.
          </div>
          <div className="flex gap-6 mr-12">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
