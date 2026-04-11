import { SectionTitle } from '../components/section-title.component';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoMailOutline, IoLocationOutline, IoSend } from 'react-icons/io5';

export const Contact = () => {
	return (
		<section className='contact-section container' id='contact'>
			<div className='contact-grid'>
				<div className='contact-info'>
					<h2 className='contact-heading'>Let's Create Something Great</h2>
					<p className='contact-subtext'>
						I'm currently available for internships and freelance opportunities. Feel free to reach out!
					</p>

					<div className='info-list'>
						<div className='info-item'>
							<div className='icon-wrapper'>
								<IoMailOutline />
							</div>
							<div className='info-detail'>
								<span>Email</span>
								<p>abhijeetduttaam@gmail.com</p>
							</div>
						</div>
						<div className='info-item'>
							<div className='icon-wrapper'>
								<IoLocationOutline />
							</div>
							<div className='info-detail'>
								<span>Location</span>
								<p>India</p>
							</div>
						</div>
					</div>

					<div className='social-links'>
						<a href='https://github.com/abhijeetdutta-1908' target='_blank' rel='noopener' className='social-icon'>
							<FaGithub />
						</a>
						<a href='https://www.linkedin.com/in/abhijeet-dutta-19082005ad' target='_blank' rel='noopener' className='social-icon'>
							<FaLinkedinIn />
						</a>
						<a href='#' className='social-icon'>
							<FaInstagram />
						</a>
					</div>
				</div>

				<div className='contact-form-container'>
					<form className='contact-form' onSubmit={(e) => e.preventDefault()}>
						<div className='form-row'>
							<div className='form-group'>
								<input type='text' placeholder='Your Name' required />
							</div>
							<div className='form-group'>
								<input type='email' placeholder='Your Email' required />
							</div>
						</div>
						<div className='form-group'>
							<input type='text' placeholder='Subject' required />
						</div>
						<div className='form-group'>
							<textarea placeholder='Your Message' rows={5} required></textarea>
						</div>
						<button type='submit' className='submit-btn'>
							<span>Send Message</span>
							<IoSend />
						</button>
					</form>
				</div>
			</div>
			<div className='contact-title-wrapper'>
				<SectionTitle title='Get In' subTitle='TOUCH' />
			</div>
            <div className='blur' style={{ top: '10%', right: '10%' }}></div>
		</section>
	);
};
