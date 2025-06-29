import question_image from "@public/Image/questions.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export const Questions = () => {
	return (
		<motion.div
			className='mt-14 bg-brand rounded-2xl overflow-hidden'
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
					<motion.img
						src={question_image}
						alt='question'
						className='w-full h-80 rounded-lg'
					/>
				</motion.div>

				<motion.div
					className='w-full md:w-5/12 px-10 md:px-20 flex flex-col justify-between gap-10'
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
							Остались вопросы?
						</motion.h2>
						<motion.p
							className='font-open-sans font-normal text-lg leading-relaxed'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.5 }}
							viewport={{ once: false, amount: 0.2 }}
						>
							Можете задать их в нашем Telegram боте
						</motion.p>
					</div>
					<motion.div
						className='flex w-full justify-end'
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: 0.6 }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<Button variant={"sta"}>Задать вопрос</Button>
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};
