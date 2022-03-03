import CardReputation from './components/CardReputation';
import Navbar from './components/Navbar';
import owner from './assets/img/owner.jpg';
import ServiceList from './components/ServiceList';
import StatsList from './components/StatsList';
import ProjetCategory from './components/ProjectCategory';
import InputForm from './components/InputForm';
import SelectForm from './components/SelectForm';
import logo from './assets/img/logo.png';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';

function App() {
	return (
		<>
			<Navbar />
			<div className="relative h-screen bg-hero bg-cover bg-center pt-20">
				<div className="container mx-auto -mt-10 flex h-full items-center md:mt-0">
					<h1 className="w-10/12 text-4xl font-semibold sm:w-8/12 md:text-5xl xl:w-6/12 xl:text-7xl 2xl:w-7/12 2xl:text-8xl">
						Building things is our mission.
					</h1>
				</div>
				<div className="absolute bottom-0 right-0">
					<div className=" bg-[#3559C7] p-3">
						<h5 className="text-center text-sm font-bold text-white sm:text-base xl:text-xl">Feature Projects</h5>
						<p className="mx-auto my-4 w-8/12 text-center text-sm text-white sm:text-sm xl:text-2xl">The National University of Architecture</p>
					</div>
					<div className="flex items-center justify-evenly bg-black text-white">
						<button className="flex w-full items-center justify-center border-r border-white text-sm xl:text-lg">
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 xl:h-8 xl:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
							</svg>
							Back
						</button>
						<button className="flex w-full items-center justify-center text-sm xl:text-lg">
							Next
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 xl:h-8 xl:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className="container mx-auto mt-16">
				<h4 className="text-center text-2xl font-bold md:text-3xl">Our Reputation</h4>
				<div className="mx-auto mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-10/12">
					<CardReputation
						icon="M35 13.3333C35.884 13.3333 36.7319 13.6845 37.357 14.3096C37.9821 14.9348 38.3333 15.7826 38.3333 16.6667V23.3333C38.3333 24.2174 37.9821 25.0652 37.357 25.6904C36.7319 26.3155 35.884 26.6667 35 26.6667H33.23C32.8236 29.8888 31.2554 32.852 28.8195 35C26.3837 37.148 23.2476 38.3333 20 38.3333V35C22.6521 35 25.1957 33.9464 27.071 32.0711C28.9464 30.1957 30 27.6522 30 25V15C30 12.3478 28.9464 9.80429 27.071 7.92893C25.1957 6.05357 22.6521 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0535 9.80429 9.99996 12.3478 9.99996 15V26.6667H4.99996C4.1159 26.6667 3.26806 26.3155 2.64294 25.6904C2.01782 25.0652 1.66663 24.2174 1.66663 23.3333V16.6667C1.66663 15.7826 2.01782 14.9348 2.64294 14.3096C3.26806 13.6845 4.1159 13.3333 4.99996 13.3333H6.76996C7.17668 10.1115 8.74509 7.14878 11.1809 5.00112C13.6167 2.85346 16.7525 1.66846 20 1.66846C23.2474 1.66846 26.3832 2.85346 28.819 5.00112C31.2548 7.14878 32.8232 10.1115 33.23 13.3333H35ZM12.9333 26.3083L14.7 23.4817C16.2884 24.4767 18.1256 25.003 20 25C21.8743 25.003 23.7115 24.4767 25.3 23.4817L27.0666 26.3083C24.9487 27.6352 22.4992 28.3372 20 28.3333C17.5007 28.3372 15.0512 27.6352 12.9333 26.3083Z"
						title="Best Services"
						description="Nullam senectus porttitor in eget. Eget rutrum leo interdum."
					/>

					<CardReputation
						icon="M35 13.3333C35.884 13.3333 36.7319 13.6845 37.357 14.3096C37.9821 14.9348 38.3333 15.7826 38.3333 16.6667V23.3333C38.3333 24.2174 37.9821 25.0652 37.357 25.6904C36.7319 26.3155 35.884 26.6667 35 26.6667H33.23C32.8236 29.8888 31.2554 32.852 28.8195 35C26.3837 37.148 23.2476 38.3333 20 38.3333V35C22.6521 35 25.1957 33.9464 27.071 32.0711C28.9464 30.1957 30 27.6522 30 25V15C30 12.3478 28.9464 9.80429 27.071 7.92893C25.1957 6.05357 22.6521 5 20 5C17.3478 5 14.8043 6.05357 12.9289 7.92893C11.0535 9.80429 9.99996 12.3478 9.99996 15V26.6667H4.99996C4.1159 26.6667 3.26806 26.3155 2.64294 25.6904C2.01782 25.0652 1.66663 24.2174 1.66663 23.3333V16.6667C1.66663 15.7826 2.01782 14.9348 2.64294 14.3096C3.26806 13.6845 4.1159 13.3333 4.99996 13.3333H6.76996C7.17668 10.1115 8.74509 7.14878 11.1809 5.00112C13.6167 2.85346 16.7525 1.66846 20 1.66846C23.2474 1.66846 26.3832 2.85346 28.819 5.00112C31.2548 7.14878 32.8232 10.1115 33.23 13.3333H35ZM12.9333 26.3083L14.7 23.4817C16.2884 24.4767 18.1256 25.003 20 25C21.8743 25.003 23.7115 24.4767 25.3 23.4817L27.0666 26.3083C24.9487 27.6352 22.4992 28.3372 20 28.3333C17.5007 28.3372 15.0512 27.6352 12.9333 26.3083Z"
						title="Best Teams"
						description="Cursus semper tellus volutpat aliquet lacus."
					/>

					<CardReputation
						icon="M36.3167 28.4333L27.0667 19.1833L29.6833 16.5667L23.4333 10.3167L20.8167 12.9333L11.5667 3.68332L3.68335 11.5667L12.9333 20.8167L5.00002 28.75V35H11.25L19.1833 27.0667L28.4333 36.3167L36.3167 28.4333V28.4333ZM15.3 18.45L8.40002 11.5667L11.5667 8.39999L13.6833 10.5167L11.7 12.5L14.05 14.85L16.0333 12.8667L18.45 15.2833L15.3 18.45V18.45ZM21.55 24.7L24.7167 21.5333L27.1334 23.95L25.15 25.9333L27.5 28.2833L29.4833 26.3L31.6 28.4167L28.4333 31.5833L21.55 24.7V24.7ZM25.2217 8.53832L29.4517 4.30665L35.6983 10.5533L31.4684 14.785L25.2217 8.53832Z"
						title="Best Designs"
						description="Ultricies at ipsum nunc, tristique nam lectus."
					/>
				</div>
			</div>

			<div className="container mx-auto mt-40 lg:relative lg:flex lg:flex-row-reverse lg:items-center" id="about">
				<div className="bg-blue-800 py-6 pl-4 pr-10 lg:absolute lg:w-5/12 2xl:w-4/12">
					<h4 className="text-2xl font-bold text-white">About us</h4>
					<p className="mt-11 text-white">
						For more than 30 years we have been delivering world-class construction and we've built many lasting relationships along the way.
					</p>
					<p className="mt-4 text-white">
						We've matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.
					</p>
					<button className="mt-16 rounded-sm bg-white p-3 text-sm font-semibold text-blue-800 shadow-md transition duration-300 hover:bg-slate-100 hover:text-blue-900">
						More on Our History
					</button>
				</div>
				<div className="w-full">
					<img src={owner} alt="Owner" className="mt-4 object-cover object-center lg:float-left lg:h-[669px] lg:w-8/12" />
				</div>
			</div>

			<div className="mt-40 bg-[#F6F8F7] py-10 md:mt-48" id="services">
				<div className="container mx-auto ">
					<h4 className="text-center text-2xl font-bold md:text-3xl">Services</h4>
					<ServiceList />
				</div>
			</div>

			<div className="lg:items-enter container mx-auto mt-32 lg:flex lg:justify-between lg:space-x-28 xl:space-x-48">
				<StatsList />
				<div className="mt-12 self-center lg:mt-1 lg:w-4/12">
					<h2 className="text-4xl font-bold text-blue-800 sm:text-5xl lg:text-6xl">30 Years Experience</h2>
					<p className="mt-6 text-sm text-slate-500 sm:text-base lg:text-xl">
						Our company has been the leading provided construction services to clients throughout the USA since 1988.
					</p>
					<button className="mt-6 rounded bg-blue-800 py-2 px-6 text-sm font-semibold text-white transition duration-300 hover:bg-blue-900 hover:text-slate-100 sm:text-base md:text-base lg:text-lg">
						Contact Us
					</button>
				</div>
			</div>

			<div className="mt-14 bg-kitchen bg-cover bg-center py-20">
				<div className="container mx-auto flex flex-wrap items-center xl:justify-between">
					<div>
						<h4 className="text-3xl font-bold text-white md:text-4xl">Free consultation with exceptional quality</h4>
						<p className="mt-4 text-lg text-white md:text-xl xl:text-2xl">
							Just one call away:{' '}
							<a href="/#" className="cursor-pointer underline">
								+84 1102 2703
							</a>
						</p>
					</div>
					<div className="mt-10 xl:mt-0">
						<button className="border-2 border-white py-2 px-4 text-base font-semibold text-white md:text-lg">Get your consultation</button>
					</div>
				</div>
			</div>

			<div className="container mx-auto mt-12" id="projects">
				<h4 className="mb-6 text-center text-3xl font-bold lg:text-left xl:text-4xl">Projects</h4>
				<div className="lg:flex lg:justify-between">
					<ProjetCategory />
					<div className="mx-auto mt-14 max-w-sm sm:max-w-none lg:mt-0 lg:w-8/12">
						<ProjectList />
						<div className="mt-6 flex items-center justify-between">
							<button className="flex items-center bg-black px-10 py-3 text-sm text-white focus:ring focus:ring-slate-400 sm:px-16 md:px-20">
								{/* prettier-ignore */}
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
								</svg>
								Back
							</button>
							<div className="hidden w-full items-center justify-evenly sm:flex">
								<button className="h-4 w-4 rounded-full bg-blue-800"></button>
								<button className="h-4 w-4 rounded-full bg-slate-100"></button>
								<button className="h-4 w-4 rounded-full bg-slate-100"></button>
								<button className="h-4 w-4 rounded-full bg-slate-100"></button>
								<button className="h-4 w-4 rounded-full bg-slate-100"></button>
							</div>
							<button className="flex items-center bg-black px-10 py-3 text-sm text-white focus:ring focus:ring-slate-400 sm:px-16 md:px-20">
								Next
								{/* prettier-ignore */}
								<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-48 bg-[#F6F8F7] py-10" id="contact">
				<div className="container mx-auto max-w-xl lg:max-w-2xl xl:max-w-3xl">
					<h4 className="text-center text-3xl font-bold xl:text-4xl">What can us do for you?</h4>
					<p className="text-md mt-5 text-center text-black/80 xl:text-xl">
						We are ready to work on a project of any complexity, whether it's commercial or residential.
					</p>

					<form className="mt-6 space-y-4" onSubmit={e => e.preventDefault()}>
						<div className="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
							<InputForm type="text" required name="name" placeholder="Your Name" />
							<InputForm type="email" required name="email" placeholder="Email" />
						</div>
						<div className="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
							<SelectForm />
							<InputForm type="number" name="phone" placeholder="Phone" />
						</div>
						<textarea
							name="message"
							id="message"
							className="w-full resize-y rounded border border-slate-300 bg-white p-2 placeholder:text-slate-400 focus:outline-slate-500"
							placeholder="Message"
						></textarea>

						<div className="!mb-6 text-slate-500 before:mr-2 before:text-red-500 before:content-['*']">indicates a required field</div>

						<button className="block w-full rounded-sm bg-blue-800 py-3 px-24 text-lg font-bold text-white sm:mx-auto sm:w-max" type="submit">
							Submit
						</button>
					</form>
				</div>
			</div>

			<div className="container mx-auto mt-20 xl:flex xl:justify-between">
				<div>
					<div className="space-y-6 text-lg font-medium text-blue-800 md:text-xl">
						<div>
							ADDRESS: <span className="font-regular ml-2 text-base text-black md:text-xl">6391 Elgin St. Celina, Delaware 10299</span>
						</div>
						<div>
							PHONE: <span className="font-regular ml-7 text-base text-black md:text-xl">+84 1102 2703</span>
						</div>
						<div>
							EMAIL: <span className="font-regular ml-9 text-base text-black md:text-xl">hello@thebox.com</span>
						</div>
					</div>
					<div className="mt-8 flex items-center">
						<img src={logo} alt="Logo" />
						<div className="ml-3 text-2xl font-bold text-blue-800">
							<span className="italic">The</span>
							Box
						</div>
					</div>
				</div>

				<div className="mt-10 md:flex md:items-center md:justify-around lg:justify-between xl:mt-0 xl:block">
					<div>
						<div className="text-lg font-medium text-blue-800 md:text-xl">NEWSLETTER:</div>
						<div>
							<input
								type="email"
								className="mt-4 rounded border border-slate-300 p-2 placeholder:text-slate-400 focus:outline-slate-400"
								placeholder="Your email here"
							/>
							<button className="mt-2 rounded bg-orange-400 py-2 px-6 text-lg font-bold text-white hover:bg-orange-500 hover:text-slate-200 focus:ring focus:ring-orange-200 sm:ml-2">
								Subscribe
							</button>
						</div>
					</div>
					<div className="mt-8 md:mt-0 xl:mt-8">
						<div className="text-lg font-medium text-blue-800 md:text-xl">SOCIAL:</div>
						<div className="mt-4 flex items-center space-x-5">
							{/* prettier-ignore */}
							<a href="https://www.facebook.com" target='_blank'>
								<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={40} height={40} preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#3D445C" fillRule="evenodd" d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z" clipRule="evenodd" /></svg>
							</a>

							{/* prettier-ignore */}
							<a href="https://www.linkedin.com" target='_blank'>
								<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width={40} height={40} preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#3D445C" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z" /></svg>
							</a>

							{/* prettier-ignore */}
							<a href="https://www.twitter.com" target='_blank'>
								<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="#3D445C" d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979z"/></svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default App;
