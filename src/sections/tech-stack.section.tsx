import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaReact, FaDocker, FaAws } from 'react-icons/fa';
import { SiExpress, SiMysql, SiKubernetes, SiTerraform, SiGithubactions } from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgba(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgba(104, 160, 99, 0.7)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgba(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgba(0, 122, 158, 0.75)',
			},
		],
	},
	{
		heading: 'DevOps & Cloud',
		items: [
			{
				title: 'AWS',
				icon: <FaAws color='rgb(255, 153, 0)' />,
				color: 'rgba(255, 153, 0, 0.7)',
			},
			{
				title: 'Docker',
				icon: <FaDocker color='rgb(0, 123, 186)' />,
				color: 'rgba(0, 123, 186, 0.7)',
			},
			{
				title: 'Kubernetes',
				icon: <SiKubernetes color='rgb(49, 120, 198)' />,
				color: 'rgba(49, 120, 198, 0.7)',
			},
			{
				title: 'Terraform',
				icon: <SiTerraform color='rgb(98, 66, 154)' />,
				color: 'rgba(98, 66, 154, 0.7)',
			},
			{
				title: 'GitHub Actions',
				icon: <SiGithubactions color='rgb(32, 136, 255)' />,
				color: 'rgba(32, 136, 255, 0.7)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section className='tech-stack' id='tech-stack'>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<div>
				<SectionTitle title='Tech' subTitle='SET' />
			</div>
		</section>
	);
};