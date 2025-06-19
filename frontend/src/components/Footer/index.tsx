import Telegram from "@public/Image/Telegram.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Footer = () => {
	return (
		<>
			<div className='bg-brand/5 border-t-brand border-2 mt-28'>
				<Container>
					<motion.div
						className='w-full'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: false, amount: 0.2 }}
					>
						<motion.div
							className='flex mt-10'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							viewport={{ once: true }}
						>
							<motion.div
								className='w-3/12 flex items-center'
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.4, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<div className='text-additional'>
									<div className='flex font-medium text-2xl sm:text-3xl md:text-4xl cursor-default select-none'>
										<motion.span className='text-additional'>Trade</motion.span>
										<motion.span className='text-brand'>Co</motion.span>
									</div>
									<motion.p
										className='mt-2 font-opensans font-normal text-lg leading-none tracking-normal align-middle'
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.4, delay: 0.6 }}
										viewport={{ once: true }}
									>
										B2B-платформа для циркулярной экономики с AI и
										блокчейн-сертификацией.
									</motion.p>
									<motion.div
										className='mt-10'
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.4, delay: 0.7 }}
										viewport={{ once: true }}
									>
										<Button className='bg-brand/5 border-additional border-2'>
											<img src={Telegram} alt='telegram' />
										</Button>
									</motion.div>
								</div>
							</motion.div>

							<motion.div
								className='w-9/12'
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
							>
								<div className='text-additional flex items-center justify-between font-opensans font-semibold text-lg leading-none tracking-normal align-middle ml-12'>
									<div>О проекте</div>
									<div>Как это работает</div>
									<div>Преимущества</div>
									<div>Юридическая информация</div>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							className='text-additional mt-10 mb-10 flex justify-between items-center'
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: 0.8 }}
							viewport={{ once: true }}
						>
							<motion.div
								className='font-manrope font-semibold text-lg leading-none tracking-normal align-middle'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.9 }}
								viewport={{ once: true }}
							>
								Email@gmail.com
							</motion.div>
							<motion.div
								className='font-opensans font-normal text-lg leading-none tracking-normal text-right align-middle'
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 1.0 }}
								viewport={{ once: true }}
							>
								© TradeCo
							</motion.div>
						</motion.div>
					</motion.div>
				</Container>
			</div>
		</>
	);
};
