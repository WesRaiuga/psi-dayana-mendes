import Link from '../Link/Link';

interface HomeLinksProps {
  className?: string;
}

const HomeLinks = ({ className }: HomeLinksProps) => {
  return (
    <nav
        className={`${className ? " " + className : ""}`}
    >
        <Link href="#schedule">Agende sua sessão</Link>
        <Link href="#about-me">Sobre mim</Link>
        <Link href="#services">Serviços</Link>
        <Link href="#contact">Contato</Link>
        <Link href="#contact">Sessão</Link>
        <Link href="#contact">Sessão 2</Link>
        <Link href="#faq">FAQ</Link>
    </nav>
  )
}

export default HomeLinks;