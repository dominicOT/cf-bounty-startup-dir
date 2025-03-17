import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/admin/add-startup">Add Startup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
