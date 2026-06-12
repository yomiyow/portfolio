import { navigations } from '../constants';

const NavItems = ({ activeSection }: { activeSection: string }) => {
  return (
    <>
      {navigations.map(({ id, href, label }) => {
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