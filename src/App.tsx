import { MouseTrail } from './components/mouse-trail';
import { ScrollBar } from './components/scroll-bar';
import { AboutMe } from './sections/about-me.section';
import { InfoSection } from './sections/info.section';
import { TechStack } from './sections/tech-stack.section';
import { Works } from './sections/works.section';
import { WorkHistory } from './sections/work-history.section';
import { Resume } from './sections/resume.section';
import { Contact } from './sections/contact.section';
import './styles/about-me.css';
import './styles/work-history.css';
import './styles/resume.css';
import './styles/contact.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/tech-stack.css';
import './styles/text-hover.css';
import './styles/title.css';
import './styles/works.css';

function App() {
	return (
		<>
			<ScrollBar />
			<MouseTrail />
			<InfoSection />
			<AboutMe />
			<TechStack />
			<Works />
			<WorkHistory />
			<Resume />
			<Contact />
		</>
	);
}

export default App;