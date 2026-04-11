import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<p className='hero-eyebrow'>Hi, I am</p>
			<h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
				<TextHover
					text='ABHIJEET'
					className='name'
					as='span'
				/>
				<TextHover
					text='DUTTA'
					className='name'
					as='span'
				/>
			</h1>
			<p className='hero-tagline'>Full Stack Developer | DevOps Engineer</p>
			<div className='hero-nav-buttons'>
				<FloatingButton
					label='About Me'
					className='first'
					href='/#about-me'
				/>
				<FloatingButton
					label='Tech'
					className='sec'
					href='/#tech-stack'
				/>
				<FloatingButton
					label='Works'
					className='third'
					href='/#works'
				/>
				<FloatingButton
					label='CV'
					className='fourth'
					href='/#resume'
				/>
				<FloatingButton
					label='Contact'
					className='fifth'
					href='/#contact'
				/>
			</div>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/abhijeetdutta-1908'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/abhijeet-dutta-19082005ad/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:abhijeetduttaam@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
