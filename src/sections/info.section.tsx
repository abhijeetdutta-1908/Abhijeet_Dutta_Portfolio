import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href='/#about-me'
			/>
			<p>Hi, I am</p>
			<TextHover
				text='ABHIJEET'
				className='name'
			/>
			<TextHover
				text='DUTTA'
				className='name'
			/>
			<p>Full Stack Developer | DevOps Engineer</p>
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

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/abhijeetdutta-1908'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='www.linkedin.com/in/abhijeet-dutta-19082005ad'
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
