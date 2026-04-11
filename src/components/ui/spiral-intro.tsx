import { useEffect, useState } from 'react';
import { SpiralAnimation } from './spiral-animation';

type SpiralIntroProps = {
	onEnter: () => void;
};

export function SpiralIntro({ onEnter }: SpiralIntroProps) {
	const [startVisible, setStartVisible] = useState(false);
	const [isLeaving, setIsLeaving] = useState(false);

	useEffect(() => {
		const timer = window.setTimeout(() => setStartVisible(true), 1800);
		return () => window.clearTimeout(timer);
	}, []);

	const handleEnter = () => {
		setIsLeaving(true);
		window.setTimeout(onEnter, 650);
	};

	return (
		<div className={`spiral-intro ${isLeaving ? 'spiral-intro--leaving' : ''}`}>
			<div className='spiral-intro__animation'>
				<SpiralAnimation />
			</div>
			<div className={`spiral-intro__content ${startVisible ? 'spiral-intro__content--visible' : ''}`}>
				<p className='spiral-intro__eyebrow'>Welcome to</p>
				<h1 className='spiral-intro__title'>Abhijeet Dutta</h1>
				<p className='spiral-intro__subtitle'>Full Stack and beyond</p>
				<button type='button' className='spiral-intro__button' onClick={handleEnter}>
					Enter
				</button>
			</div>
		</div>
	);
}
