import infoImage from "@public/Image/info.svg";
import { X } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export const Info = () => {
	const [isModal, setIsModal] = useState<boolean>(false);

	const handlerToggleModal = useCallback(() => {
		setIsModal(!isModal);
	}, [isModal]);

	return (
		<>
			<motion.div
				className='mt-28 flex w-full justify-between'
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				viewport={{ once: false, amount: 0.2 }}
			>
				<div className='w-1/2'>
					<img src={infoImage} alt='info' className='w-11/12' />
				</div>
				<div className='text-additional w-1/2 flex flex-col justify-between'>
					<motion.div
						className='flex w-full justify-end'
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className='w-5/6'>
							<h1 className='font-semibold text-4xl leading-none tracking-normal'>
								TradeCo
							</h1>
							<motion.div
								className='flex flex-col mt-4 gap-4 font-manrope font-normal text-lg leading-relaxed tracking-wide align-middle'
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<p>
									B2B - платформа для циркулярной экономики с блокчейн -
									сертификацией и AI-оптимизацией.
								</p>
								<p>
									Мы соединяем компании, у которых есть избыточные материалы и
									отходы, с теми, кто может использовать их повторно.
								</p>
							</motion.div>
						</div>
					</motion.div>
					<motion.div
						className='flex w-full justify-end'
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className='w-5/6'>
							<Button size={"xl"} onClick={handlerToggleModal}>
								Записаться на бето - тестирование
							</Button>
						</div>
					</motion.div>
				</div>
			</motion.div>

			{isModal && (
				<>
					<motion.div
						className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={handlerToggleModal}
					></motion.div>

					<motion.div
						className='absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              bg-main border-2 border-additional p-6 rounded-lg shadow-lg text-white'
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						transition={{ type: "spring", damping: 15, stiffness: 300 }}
					>
						<div className='flex w-full'>
							<div className='w-10/12'>
								<h2 className='font-manrope font-semibold text-4xl leading-none mb-4'>
									Подать заявку на бето - тест
								</h2>
								<p className='mb-4 font-open-sans font-normal text-lg leading-relaxed'>
									Оставьте вашу почту — в ближайшее время мы отправим вам ссылку
									на бета-тест
								</p>
							</div>
							<div className='w-2/12 flex justify-end'>
								<X onClick={handlerToggleModal} className='cursor-pointer' />
							</div>
						</div>
						<div className='mb-4'>
							<Input
								placeholder='Введите ваш email'
								className='font-normal font-opensans text-lg leading-none tracking-normal align-middle'
							/>
						</div>
						<div className='flex w-full mt-14'>
							<Button
								size={"xl"}
								onClick={handlerToggleModal}
								className='w-full cursor-pointer'
							>
								Отправить заявку
							</Button>
						</div>
					</motion.div>
				</>
			)}
		</>
	);
};
