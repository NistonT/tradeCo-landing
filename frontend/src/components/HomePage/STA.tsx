import STA_image from "@public/Image/STA.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export const STA = () => {
	return (
		<motion.div
			className='mt-28 bg-brand rounded-2xl overflow-hidden'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: false, amount: 0.2 }}
		>
			<div className='flex flex-wrap items-center'>
				<motion.div
					className='max-w-3xl md:w-7/12'
					initial={{ x: -30, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: false, amount: 0.2 }}
				>
					<img
						src={STA_image}
						alt='sta'
						className='w-full h-auto object-cover'
					/>
				</motion.div>

				<motion.div
					className='w-full md:w-5/12 px-10 md:px-20 flex flex-col justify-between gap-20'
					initial={{ x: 30, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					viewport={{ once: false, amount: 0.2 }}
				>
					<div>
						<motion.h2
							className='font-manrope font-semibold text-4xl leading-none mb-4'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.4 }}
							viewport={{ once: false, amount: 0.2 }}
						>
							Будь на шаг впереди.
						</motion.h2>
						<motion.p
							className='font-open-sans font-normal text-lg leading-relaxed'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.5 }}
							viewport={{ once: false, amount: 0.2 }}
						>
							Подпишись на закрытое бета-тестирование и первым получи доступ к
							будущему B2B-рынка.
						</motion.p>
					</div>
					<motion.div
						className='flex w-full justify-end'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<Button variant={"sta"}>Подписаться</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};
