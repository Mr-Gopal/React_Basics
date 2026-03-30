import './IdentityCard.css';
import { Mail, Phone, Calendar, Fingerprint } from 'lucide-react';

const IdentityCard = ({user}) => {
  return (
    <div className="card-wrapper">
      <div className="id-card">
        {/* Background Decor */}
        <div className="shape-top-white"></div>
        <div className="shape-top-red"></div>
        
        {/* Main Content */}
        <div className="profile-section">
          <div className="photo-frame">
            {user.image ? (
              <img src={user.image} alt="Profile" />
            ) : (
              <span style={{color: '#94a3b8'}}>PHOTO</span>
            )}
          </div>

          <div className="name-header">
            <h1>{user.firstName} <span>{user.lastName}</span></h1>
            <div className="role-line">
              <div className="line"></div>
              <span className="role-text">{user.role}</span>
            </div>
          </div>
        </div>

        {/* User Details */}
        <div className="info-container">
          <div className="info-item">
            <Fingerprint className="icon-red" size={28} />
            <div>
              <span className="info-label">ID Number</span>
              <span className="info-value" style={{fontFamily: 'monospace'}}>{user.id}</span>
            </div>
          </div>

          <div className="info-item">
            <Calendar className="icon-red" size={28} />
            <div>
              <span className="info-label">Date of Birth</span>
              <span className="info-value">{user.birthDate}</span>
            </div>
          </div>

          <div className="info-item">
            <Phone className="icon-red" size={28} />
            <div>
              <span className="info-label">Phone</span>
              <span className="info-value">{user.phone}</span>
            </div>
          </div>

          <div className="info-item">
            <Mail className="icon-red" size={28} />
            <div>
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom Decor */}
        <div className="shape-bottom-red"></div>
        <div className="shape-bottom-white"></div>
      </div>
    </div>
  );
};

export default IdentityCard;