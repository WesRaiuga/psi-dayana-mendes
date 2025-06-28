import React, { useEffect, useState } from 'react';
import style from './App.module.css';
import Menu from './components/Menu/Menu';
import Loader from './components/Loader/Loader';

const useEffectLoader = (setShowLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const show = setTimeout(() => setShowLoading(false), 500);
    return () => clearTimeout(show);
  }, [setShowLoading]);
}

const useEffectShowContent = (loading: boolean, setShowContent: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    if (!loading) {
      const show = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(show);
    } else {
      setShowContent(false);
    }
  }, [loading, setShowContent]);
}

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffectLoader(setShowLoading);
  useEffectShowContent(showLoading, setShowContent);

  return (
    <>
      <Loader loading={showLoading} />

      <div
      className={style.content}
      style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 3s ease'
        }}
      >
        <Menu />
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quasi explicabo nam sapiente, necessitatibus exercitationem veniam beatae veritatis mollitia fugiat possimus iure quisquam consequatur illo consectetur omnis fuga pariatur quidem.</p>
      
      </div>
    </>
  );
}

export default App;
