import Link from '../Link/Link';

interface HomeLinksProps {
  className?: string;
}

const HomeLinks = ({ className }: HomeLinksProps) => {
  return (
    <nav
        className={`${className ? " " + className : ""}`}
    >
        <Link href="#about-me">Sobre mim</Link>
        <Link href="#education">Formações</Link>
        <Link href="#services">Serviços</Link>
        <Link href="#contact">Contato</Link>
        <Link href="#faq">FAQ</Link>
    </nav>
  )
}

export default HomeLinks;