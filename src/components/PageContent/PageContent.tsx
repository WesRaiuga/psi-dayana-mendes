import style from './PageContent.module.css';

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return <main className={style.main}>{ children }</main>
}

export default PageContent;