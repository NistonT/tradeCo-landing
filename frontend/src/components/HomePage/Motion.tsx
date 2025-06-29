import motion_image from "@public/Image/motion.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export const Motion = () => {
	return (
		<>
			<motion.div
				className='flex justify-between mt-14 relative items-center'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: false, amount: 0.2 }}
			>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Button variant={"additional"} size={"motion"}>
						Ваши остатки
					</Button>
				</motion.div>

				<motion.div
					className='absolute left-1/2 -translate-x-1/2'
					initial={{ scale: 0.8, opacity: 0 }}
					whileInView={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 15,
						delay: 0.3,
					}}
					viewport={{ once: true }}
				>
					<img src={motion_image} alt='motion' />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
				>
					<Button variant={"brand"} size={"motion"}>
						Чья-то находка
					</Button>
				</motion.div>
			</motion.div>
		</>
	);
};
