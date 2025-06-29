import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Header = () => {
	return (
		<>
			<Container>
				<motion.div
					className='flex justify-between items-center py-4 mt-5'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
				>
					<div className='flex font-medium text-2xl sm:text-3xl md:text-4xl cursor-default select-none'>
						<motion.span className='text-white'>Trade</motion.span>
						<motion.span className='text-brand'>Co</motion.span>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.4 }}
					>
						<Button>Записаться</Button>
					</motion.div>
				</motion.div>
			</Container>
		</>
	);
};
