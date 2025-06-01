const Service = ({ title, icon, description }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        {icon.startsWith('/') ? (
          <img src={icon} alt={`${title} icon`} width="40" />
        ) : (
          <span className="service-emoji-icon">{icon}</span>
        )}
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
}

export default Service;
