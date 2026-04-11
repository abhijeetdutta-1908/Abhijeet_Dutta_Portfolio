export const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='footer-container'>
			<p>&copy; {currentYear} Abhijeet Dutta. All rights reserved.</p>
		</footer>
	);
};
