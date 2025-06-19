import { FileCheck, HeartHandshake, LucideIcon, Package } from "lucide-react";
import { motion } from "motion/react";

export const OurAdvantages = () => {
	interface IAdvantages {
		icon: LucideIcon;
		title: string;
		description: string;
	}

	const advantages: IAdvantages[] = [
		{
			icon: FileCheck,
			title: "Блокчейн-сертификация",
			description: "честные и прозрачные сделки",
		},
		{
			icon: Package,
			title: "AI-оптимизация цепочек поставок",
			description: "умная оптимизация процессов",
		},
		{
			icon: HeartHandshake,
			title: "B2B-ориентированность",
			description: "всё под нужды компаний: контракты, опт, интеграции.",
		},
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
				Наши преимущества
			</motion.h2>

			<div className='grid grid-cols-3 gap-4 text-brand'>
				{advantages.map((elem, index) => (
					<motion.div
						key={elem.title}
						className='flex justify-center gap-6 items-center bg-additional-06 py-6 px-6 rounded-2xl border-2 border-additional'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<div className='w-20 h-20'>
							{<elem.icon className='w-full h-full' />}
						</div>
						<div className='flex flex-col gap-2.5'>
							<div className='font-manrope font-semibold text-2xl leading-none tracking-normal align-middle'>
								{elem.title}
							</div>
							<div className='text-white font-open-sans font-normal text-lg leading-none tracking-normal align-middle'>
								{elem.description}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</motion.div>
	);
};
