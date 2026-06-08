const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#project', label: 'Projects' },
  { href: '#certificate', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

const NavItems = ({ activeSection }: { activeSection: string }) => {
  return (
    <>
      {navLinks.map(({ href, label }) => {
        const id = href.replace('#', '');
        const linkClass = activeSection === id ? 'menu-active' : '';

        return (
          <li key={href}>
            <a href={href} className={linkClass}>{label}</a>
          </li>
        );
      })}
    </>
  );
};

export default NavItems;