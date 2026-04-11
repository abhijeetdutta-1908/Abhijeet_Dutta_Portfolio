import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Certification',
		items: [
			{
				title: 'NPTEL - Joy of Computing Using Python (Topper)',
				place: 'IIT Ropar',
				timePeriod: '2025',
				description: (
					<ul>
						<li>
							Achieved top rank in the NPTEL course "Joy of Computing Using Python".
						</li>
						<li>
							Received internship opportunity from IIT Ropar with training in MERN stack.
						</li>
					</ul>
				),
			},
			{
				title: 'DevOps Masters Training',
				place: 'Ingenious-tech',
				timePeriod: '2025',
				description: (
					<ul>
						<li>
							Completed industrial-level training covering Docker, Kubernetes, Terraform, and CI/CD pipelines.
						</li>
						<li>
							Gained hands-on experience with real-world DevOps workflows and automation tools.
						</li>
					</ul>
				),
			},
			{
				title: 'Python Programming & Applications Internship',
				place: 'Syllogistek Systems Pvt. Ltd.',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Completed internship focused on Python development and application building.
						</li>
						<li>
							Built real-world projects using Flask and implemented CRUD operations.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology (B.Tech)',
				place: 'Silicon University, Odisha (CSE)',
				timePeriod: '2023 - Present',
				description: 'CGPA: 9.00',
			},
			{
				title: 'Class XII (CBSE)',
				place: 'Doon International School, Bhubaneswar',
				timePeriod: '2023',
				description: 'Percentage: 71.4%',
			},
			{
				title: 'Class X',
				place: 'St. Xavier’s High School, Bhadrak',
				timePeriod: '2021',
				description: 'Percentage: 91.6%',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me container' id='about-me'>
			<div>
				<SectionTitle title='About' subTitle='ME' />
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Abhijeet Dutta, a Full Stack Developer.
					</p>
					<p>
						I work with <strong>MERN Stack</strong> and have hands-on experience
						in building scalable web applications, integrating APIs, and deploying
						production-ready projects.
					</p>
					<p>
						I enjoy solving real-world problems through technology, especially in
						areas like automation, web development, and system design. I also love
						working on impactful projects like NGO platforms and IoT-based systems.
					</p>
				</div>

				<div>
					{timeline.map(({ items, title }, idx) => (
						<div className='timeline' key={idx}>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div className='timeline-list' key={idx}>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};