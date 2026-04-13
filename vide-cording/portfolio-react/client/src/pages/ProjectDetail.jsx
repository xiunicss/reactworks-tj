import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="detail-container">
          <h1>프로젝트를 찾을 수 없습니다</h1>
          <button onClick={() => navigate('/')} className="back-button">
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← 돌아가기
        </button>

        <div className="detail-content">
          <div className="detail-image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="detail-info">
            <h1>{project.title}</h1>
            <p className="detail-description">{project.fullDescription}</p>

            <div className="technologies-section">
              <h3>사용 기술</h3>
              <div className="tech-list">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>

            <div className="features-section">
              <h3>주요 기능</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="details-section">
              <h3>프로젝트 상세</h3>
              <p>{project.details}</p>
            </div>

            <div className="action-buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-button">
                프로젝트 방문 →
              </a>
              <button onClick={() => navigate('/')} className="close-button">
                목록으로 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
