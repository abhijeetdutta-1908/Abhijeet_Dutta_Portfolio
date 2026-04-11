import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaAws , FaDocker } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiKubernetes, SiTerraform, SiGithubactions } from 'react-icons/si';
import { SectionTitle } from '../components/section-title.component';
import { GlowLink } from '../components/glow-box-link';
import { GlowBox } from '../components/glow-box';

const projects = [
	{
		title: 'Canteen Food Ordering System',
		description:
			'A role-based full-stack application enabling students and vendors to interact within a digital canteen system. Features include authentication, dynamic menu management, and real-time order tracking with vendor-side status updates.',
		tech: [
			{ icon: <FaReact color='#61DAFB' />, name: 'React', color: 'rgba(97, 219, 251, 0.6)' },
			{ icon: <FaNodeJs color='#68A063' />, name: 'Node.js', color: 'rgba(104, 160, 99, 0.6)' },
			{ icon: <SiExpress color='#ffffff' />, name: 'Express', color: 'rgba(255, 255, 255, 0.4)' },
			{ icon: <SiMongodb color='#47A248' />, name: 'MongoDB', color: 'rgba(71, 162, 72, 0.6)' },
		],
		github: 'https://github.com/abhijeetdutta-1908',
		live: 'https://campus-eats-sooty-three.vercel.app',
	},
	{
		title: 'DevSecOps Pipeline for Containerized Applications',
		description:
			'Designed and implemented a secure CI/CD pipeline for containerized applications using Kubernetes. Used Terraform for infrastructure provisioning, GitHub Actions for automation, and Argo CD for GitOps-based deployments. Integrated security tools like tfsec and Trivy, with Sealed Secrets for secure credential management.',
		tech: [
			{ icon: <FaAws color='#FF9900' />, name: 'AWS', color: 'rgba(255, 153, 0, 0.6)' },
			{ icon: <FaDocker color='#0db7ed' />, name: 'Docker', color: 'rgba(13, 183, 237, 0.6)' },
			{ icon: <SiKubernetes color='#326ce5' />, name: 'Kubernetes', color: 'rgba(50, 108, 229, 0.6)' },
			{ icon: <SiTerraform color='#7B42BC' />, name: 'Terraform', color: 'rgba(123, 66, 188, 0.6)' },
			{ icon: <SiGithubactions color='#2088FF' />, name: 'GitHub Actions', color: 'rgba(32, 136, 255, 0.6)' },
		],
		github: 'https://github.com/abhijeetdutta-1908',
	},
	{
		title: 'AWS CI/CD Pipeline with Terraform & CodePipeline',
		description:
			'Built an end-to-end CI/CD pipeline on AWS using Terraform and CodePipeline. Automated application build, testing, and deployment to EC2 instances. Integrated GitHub workflows and validated infrastructure using Terratest and Go to ensure reliability.',
		tech: [
			{ icon: <FaAws color='#FF9900' />, name: 'AWS', color: 'rgba(255, 153, 0, 0.6)' },
			{ icon: <SiTerraform color='#7B42BC' />, name: 'Terraform', color: 'rgba(123, 66, 188, 0.6)' },
			{ icon: <SiGithubactions color='#2088FF' />, name: 'GitHub Actions', color: 'rgba(32, 136, 255, 0.6)' },
		],
		github: 'https://github.com/abhijeetdutta-1908',
	},
];

export const Works = () => {
	return (
		<section className='works-section container' id='works'>
			<div>
				<SectionTitle title='My' subTitle='WORKS' />
			</div>
			<div className='projects-grid'>
				{projects.map((project, index) => (
					<div className='project-card' key={index}>
						<div className='project-info'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className='project-tech'>
								{project.tech.map((t, i) => (
									<GlowBox key={i} icon={t.icon} color={t.color} title={t.name} />
								))}
							</div>
						</div>
						<div className='project-links'>
							<GlowLink
								href={project.github}
								color='rgba(255, 255, 255, 0.5)'
								icon={<FaGithub color='rgba(255, 255, 255, 0.8)' />}
								aria-label='GitHub'
							/>
							{project.live && (
								<GlowLink
									href={project.live}
									color='rgba(31, 195, 255, 0.6)'
									icon={<FaExternalLinkAlt color='rgba(31, 195, 255, 0.8)' />}
									aria-label='Live Demo'
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
