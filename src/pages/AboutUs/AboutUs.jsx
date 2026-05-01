import './AboutUs.css';
import kotePhoto from '../../assets/PhotosTeam/KotePhoto.jpg';
import sebaPhoto from '../../assets/PhotosTeam/PhotoSeba.jpg';
import mawuPhoto from '../../assets/PhotosTeam/MawuPhoto.jpg';

const TEAM = [
  {
    initials: 'KP',
    name: 'Kote Parra',
    role: 'LICC',
    description: 'TheGame, aun no he visto completamente Adventure',
    photo: kotePhoto,
  },
  {
    initials: 'MC',
    name: 'Mawu',
    role: 'LICC',
    description: 'Fan Hora de Aventura y la musica',
    photo: mawuPhoto,
  },
  {
    initials: 'SS',
    name: 'Seba Sepulveda',
    role: 'ING',
    description: 'Soy parte de Tutores de Ingeniería y Coro Universitario UC. Me gusta mucho la música y el canto.',
    photo: sebaPhoto,
  },
];

// ─────────────────────────────────────────────────────

export default function AboutUs() {
  return (
    <main className="about">
      
      <div className="about__overlay">

        {/* ── Sección intro ── */}
        <section className="about__intro">
          <div className="about__intro-img">

            <img src='https://i.pinimg.com/736x/29/09/9d/29099dd4d6b7120c6cc21a016b157e2b.jpg' />
          </div>

          <div className="about__intro-text">
          
            <h1>¿Quienes somos?</h1>
          
            <p>
              ¡Hola! Somos un grupo de estudiantes (y aventureros a tiempo parcial) de la UC que, entre líneas de código y clases de algoritmos, decidimos que el mundo necesitaba un lugar real para conseguir esos objetos mágicos que solo veíamos en la tele.
            </p>
          </div>
        </section>

        {/* ── Cards de equipo ── */}
        <section className="about__team">
          <p className="about__team-label">Nuestro equipo</p>
          <div className="about__team-grid">
            {TEAM.map((member) => (
              <div className="member-card" key={member.name}>
                <img
                  className="member-card__photo"
                  src={member.photo}
                  alt={member.name}
                />
                <div className="member-card__info">
                  <div className="member-card__avatar">{member.initials}</div>
                  <p className="member-card__name">{member.name}</p>
                  <p className="member-card__role">{member.role}</p>
                  <p className="member-card__desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}