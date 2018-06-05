import React from 'react';
import './index.css';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__list">
        <a href="#phone" className="contacts__list__phone">
          8(800)500-75-55
        </a>

        <a href="#phone1" className="contacts__list__phone-text">
          Бесплатный звонок по России
        </a>

        <a href="#3" className="contacts__list__start-blog">
          <span className="contacts__list__star-icon" />
          <span>Звездный блог</span>
        </a>

        <a href="#4" className="contacts__list__youtube-1">
          <span className="contacts__list__youtube-1-icon" />
          <span>Смотрите нас на YouTube</span>
        </a>

        <a href="#5" className="contacts__list__youtube-2">
          <span className="contacts__list__youtube-2-icon" />
          <span>Смотрите наш прямой эфир</span>
        </a>
      </div>
    </div>
  );
};

export default Contacts;
