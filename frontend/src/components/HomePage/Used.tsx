import { motion } from "motion/react";

export const Used = () => {
	const used: string[] = [
		"Производственные компании",
		"Поставщики и закупщики вторсырья",
		"Перерабатывающие предприятия",
		"Экологические стартапы",
	];

	return (
		<motion.div
			className='mt-28'
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: false, amount: 0.2 }}
		>
			<motion.h2
				className='font-manrope font-normal text-5xl leading-none tracking-normal align-middle mb-7 text-additional'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
				viewport={{ once: false, amount: 0.2 }}
			>
				Кто использует TradeCo
			</motion.h2>

			<motion.div
				className='grid grid-cols-4 gap-7 text-additional w-full'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				viewport={{ once: false, amount: 0.2 }}
			>
				{used.map((text, index) => (
					<motion.div
						key={index}
						className='bg-additional-06 rounded-2xl border-2 border-additional'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<div className='flex items-center justify-center h-28 font-manrope font-semibold text-lg leading-relaxed tracking-wider text-center align-middle'>
							{text}
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};
