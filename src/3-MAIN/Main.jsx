import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Main.css';
import myprojects from './MyProject';

function Main() {
  const [active, setActive] = useState('activeAllP');
  const [arr, setArr] = useState(myprojects);

  const handleFilter = (category) => {
    setActive(`active${category}`);
  };

  const categoryReact = () => {
    const newarray = myprojects.filter((item) => item.category === 'react');
    setArr(newarray);
  };

  const categoryhtmlCss = () => {
    const newarray = myprojects.filter((item) => item.category === 'htmlCss');
    setArr(newarray);
  };

  const categorynode = () => {
    const newarray = myprojects.filter((item) => item.category === 'node');
    setArr(newarray);
  };

  const categoryjs = () => {
    const newarray = myprojects.filter((item) => item.category === 'js');
    setArr(newarray);
  };

  return (
    <div>
    <main className="flex">
    <section className="flex left-section">
      <button className={active === 'activeAllP' ? 'active' : null} onClick={() => { handleFilter('AllP'); setArr(myprojects) }}>
        All Projects
      </button>
      <button className={active === 'activeHTML' ? 'active' : null} onClick={() => { handleFilter('HTML'); categoryhtmlCss() }}>
        HTML CSS
      </button>
      <button className={active === 'activeJS' ? 'active' : null} onClick={() => { handleFilter('JS'); categoryjs() }}>
        JavaScript
      </button>
      <button className={active === 'activeReact' ? 'active' : null} onClick={() => { handleFilter('React'); categoryReact() }}>
        React
      </button>
      <button className={active === 'activeNode' ? 'active' : null} onClick={() => { handleFilter('Node'); categorynode() }}>
        Node & Express
      </button>
    </section>

    <section className="flex right-section">
      {arr.map((item) => (
        <motion.div
          layout
          key={item.imgPath}
          initial={{ opacity: 0, transform: 'scale(0)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          transition={{ duration: 0.9 }}
          className="card"
        >
          <img width={250} height={140} src={item.imgPath} alt="" />
          <div style={{ width: '240px' }} className="box ">
            <h1 className="titl">{item.projectTitle}</h1>
            <p className="sub-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illo repudiandae adipisci laborum.
              Aliquam, illum iusto quidem totam corrupti sequi ilyas
            </p>
            <div className="flex icons">
              <div style={{ gap: '11px' }} className="flex">
                <a href="">
                  <img className='link' width="24" height="24" src="https://img.icons8.com/3d-fluency/94/link.png" alt="link" />
                </a>
                <a href="">
                  <img width="24" height="24" src="https://img.icons8.com/3d-fluency/94/github.png" alt="github" />
                </a>
              </div>

              <a href="" className="flex">
                <p style={{ color: '#2074BF', fontFamily: 'arial', fontSize: '17px' }}>more</p>
                <span>
                  <img
                    style={{ marginTop: '4px' }}
                    width="24"
                    height="24"
                    src="https://img.icons8.com/windows/32/228BE6/circled-right-2.png"
                    alt="circled-right-2"
                  />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
    
  </main>

    </div>

  );
}

export default Main;
