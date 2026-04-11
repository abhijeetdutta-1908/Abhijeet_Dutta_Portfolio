import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { SectionTitle } from '../components/section-title.component';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { IoMailOutline, IoLocationOutline, IoSend, IoCheckmarkCircleOutline } from 'react-icons/io5';

export const Contact = () => {
	const form = useRef<HTMLFormElement>(null);
	const [isSending, setIsSending] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const sendEmail = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!form.current) return;

		setIsSending(true);
		setStatus('idle');

		const formData = new FormData(form.current);
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const subject = formData.get('subject') as string;
		const message = formData.get('message') as string;

		let ip = 'Unknown IP';
		let location = 'Unknown Location';

		try {
			// One fast API call provides both IP and detailed location
			const res = await fetch('https://ipapi.co/json/');
			if (res.ok) {
				const data = await res.json();
				ip = data.ip || ip;
				location = `${data.city}, ${data.region}, ${data.country_name}`;
			}
		} catch (error) {
			console.error('Failed to get location:', error);
		}

		const templateParams = {
			name,
			email,
			subject,
			message,
			time: new Date().toLocaleString(),
			ip,
			location,
		};

		const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
			.then(
				() => {
					setStatus('success');
					form.current?.reset();
				},
				(error) => {
					console.error('EmailJS Error:', error);
					setStatus('error');
				}
			)
			.finally(() => {
				setIsSending(false);
				setTimeout(() => setStatus('idle'), 5000);
			});
	};

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
						<a href='https://www.instagram.com/_abhijeet_dutta_/' target='_blank' rel='noopener' className='social-icon'>
							<FaInstagram />
						</a>
					</div>
				</div>

				<div className='contact-form-container'>
					<form className='contact-form' ref={form} onSubmit={sendEmail}>
						<div className='form-row'>
							<div className='form-group'>
								<input type='text' placeholder='Your Name' name='name' required />
							</div>
							<div className='form-group'>
								<input type='email' placeholder='Your Email' name='email' required />
							</div>
						</div>
						<div className='form-group'>
							<input type='text' placeholder='Subject' name='subject' required />
						</div>
						<div className='form-group'>
							<textarea placeholder='Your Message' name='message' rows={5} required></textarea>
						</div>
						
						<button type='submit' className={`submit-btn ${isSending ? 'loading' : ''}`} disabled={isSending}>
							{isSending ? (
								<span>Sending...</span>
							) : status === 'success' ? (
								<>
									<span>Success!</span>
									<IoCheckmarkCircleOutline />
								</>
							) : (
								<>
									<span>Send Message</span>
									<IoSend />
								</>
							)}
						</button>

						{status === 'error' && (
							<p className='error-message'>Something went wrong. Please try again.</p>
						)}
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
