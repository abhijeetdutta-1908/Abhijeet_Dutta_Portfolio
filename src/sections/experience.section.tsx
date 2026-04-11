import { SectionTitle } from '../components/section-title.component';
import { FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
	{
		title: 'Web Developer Intern',
		company: 'Fularani Foundation',
		period: 'Jan 2026 - Apr 2026',
		description: [
			'Developed and deployed the official website for the NGO with a donor dashboard and Razorpay payment integration.',
			'Implemented automated donation receipt generation and social sharing features.',
			'Handled AWS deployment and built a complete CI/CD pipeline for seamless updates.',
		],
		link: 'https://fularanifoundation.org',
	},
	{
		title: 'MERN Stack Intern',
		company: 'IIT Ropar',
		period: 'Jan 2026',
		description: [
			'Successfully completed the NPTEL course "The Joy of Computing Using Python" as a course topper.',
			'Awarded a prestigious internship at IIT Ropar based on academic excellence.',
			'Gained hands-on experience in MERN stack development and system architecture.',
		],
	},
	{
		title: 'Web Developer',
		company: 'Zygon x Noesis (Silicon University Fest)',
		period: 'Dec 2025 - Feb 2026',
		description: [
			'Designed and developed the official website for Silicon University\'s flagship technical fest, Zygon xNoesis.',
			'Managed real-time event registrations and integrated an interactive schedule for attendees.',
			'Optimized the platform for high traffic and cross-device compatibility.',
		],
		link: 'https://sitbfest.in/',
	},
];

export const Experience = () => {
	return (
		<section className='experience-section container' id='experience'>
			<div className='experience-grid'>
				{experiences.map((exp, index) => (
					<div className='experience-card' key={index}>
						<div className='exp-header'>
							<div className='exp-title-group'>
								<h3>{exp.title}</h3>
								<p className='company'>{exp.company}</p>
							</div>
							<span className='period'>{exp.period}</span>
						</div>
						<ul className='exp-details'>
							{exp.description.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
						{exp.link && (
							<a href={exp.link} target='_blank' rel='noopener noreferrer' className='exp-link'>
								Visit Project <FaExternalLinkAlt size={12} />
							</a>
						)}
					</div>
				))}
			</div>
			<div>
				<SectionTitle title='Work' subTitle='HISTORY' />
			</div>
		</section>
	);
};
