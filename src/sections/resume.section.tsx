import { SectionTitle } from '../components/section-title.component';
import { FaEye, FaDownload } from 'react-icons/fa';

export const Resume = () => {
	return (
		<section className='resume-section container' id='resume'>
			<div>
				<SectionTitle title='My' subTitle='RESUME' />
			</div>
			<div className='resume-content'>
				<div className='resume-card'>
					<p className='resume-description'>
						Explore my complete professional background, technical expertise, and academic achievements in a structured format.
					</p>
					<div className='resume-actions'>
						<a href='/Abhijeet_Dutta_Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-btn view'>
							<FaEye size={20} />
							<span>View Online</span>
						</a>
						<a href='/Abhijeet_Dutta_Resume.pdf' download='Abhijeet_Dutta_Resume.pdf' className='resume-btn download'>
							<FaDownload size={20} />
							<span>Download PDF</span>
						</a>
					</div>
				</div>
                <div className='blur'></div>
			</div>
		</section>
	);
};
