import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={`${import.meta.env.BASE_URL}images/yicheng.jpg`}
              alt="Yicheng Wang"
              width="80"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Yicheng Wang">
              Yicheng Wang
            </h1>

            <p className="title">Full-Stack Developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>

            <GiClawSlashes />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <GiMailbox/>
                
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href="mailto:yichengw1011@gmail.com" className="contact-link">
                  yichengw1011@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiPhone/>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href="tel:+15512616355" className="contact-link">
                  +1 (551) 261-6355
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <GiCalendar/>
               
              </div>

              <div className="contact-info">
                <p className="contact-title">Education</p>

                <time>Master of CS - CU Boulder</time>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/yicheng-wang-b43604261" className="social-link" target="_blank">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

            <li className="social-item">
            <a href="https://github.com/lunaako" className="social-link" target="_blank">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

          </ul>
        </div>
      </aside>
  )
}

export default Aside