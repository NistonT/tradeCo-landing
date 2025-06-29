import Telegram from "@public/Image/Telegram.svg";
import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export const Footer = () => {
	return (
		<>
			<div className='bg-brand/5 border-t-brand border-2 mt-28'>
				<Container>
					<motion.div className='w-full'>
						<motion.div className='flex mt-10'>
							<motion.div className='w-3/12 flex items-center'>
								<div className='text-additional'>
									<div className='flex font-medium text-2xl sm:text-3xl md:text-4xl cursor-default select-none'>
										<motion.span className='text-additional'>Trade</motion.span>
										<motion.span className='text-brand'>Co</motion.span>
									</div>
									<motion.p className='mt-2 font-opensans font-normal text-lg leading-none tracking-normal align-middle'>
										B2B-платформа для циркулярной экономики с AI и
										блокчейн-сертификацией.
									</motion.p>
									<motion.div className='mt-10'>
										<Button className='bg-brand/5 border-additional border-2'>
											<img src={Telegram} alt='telegram' />
										</Button>
									</motion.div>
								</div>
							</motion.div>

							<motion.div className='w-9/12'>
								<div className='text-additional flex items-center justify-between font-opensans font-semibold text-lg leading-none tracking-normal align-middle ml-12'>
									<div>О проекте</div>
									<div>Как это работает</div>
									<div>Преимущества</div>
									<div>Юридическая информация</div>
								</div>
							</motion.div>
						</motion.div>

						<motion.div className='text-additional mt-10 mb-10 flex justify-between items-center'>
							<motion.div className='font-manrope font-semibold text-lg leading-none tracking-normal align-middle'>
								Email@gmail.com
							</motion.div>
							<motion.div className='font-opensans font-normal text-lg leading-none tracking-normal text-right align-middle'>
								© TradeCo
							</motion.div>
						</motion.div>
					</motion.div>
				</Container>
			</div>
		</>
	);
};
