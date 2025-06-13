export const navbar = {
	logo_text: 'LordJatonyas'
};

// if you dont want it, just set it to an empty string
export const socials = {
	text_on_right: 'LordJatonyas',
	linkedin: `https://www.linkedin.com/in/lee-chih-jung/`,
	github: `https://github.com/lordjatonyas`,
	x: `https://x.com/LCJJohn`
};

export const hi = {
	section_id: `Hi`,
	greeting: `Hi, my name is`,
	name: `John Lee`,
	what_is_this: `Welcome to my webpage.`,
	who_am_i: `I am the cofounder of AiMo Labs, a biometrics startup building software for wearable tech. Email me to learn more!`,
	button: {
		text: `Email me`,
		href: "mailto: john.1201@icloud.com"
	}
};

export const about = {
	section_title: 'About Me',
	section_id: 'About',
	paragraphs: [
		`Hello! My name is John.`,
		`I'm a final year engineering student at Oxford, with keen ambitions in wearable technology.
		I am currently building a stealth startup (AiMo Labs) in this space, with plans to launch 
		late 2025 - early 2026, so stay tuned!`
	],
	skills: [
		
	]
};

export const experiences = {
	section_title: 'Where I’ve Worked',
	section_id: 'Experiences',
	list: [
		{
			company: 'AiMo Labs',
			title: 'Cofounder',
			when: 'Feb 2025 - present',
			points: [
				'Prize winner at OX1 Demo Day 2025.',
				'Currently in stealth mode!'
			]
		},
		{
			company: 'OxNeurotech',
			title: 'Project Lead, President',
			when: 'May 2023 - Jan 2024, Jan 2024 - Mar 2025',
			href: 'https://www.oxfordsu.org/get-involved/clubs-and-societies/join/oxneurotech/',
			points: [
				"Oxford's neurotechnology student society.",
				'Initiated project workshops that encourage weekly building among society members.',
				'Taught technical workshops to introduce members to advanced analysis techniques.',
				"Provided technical support to users of the society's equipment."
			]
		},
		{
			company: 'UCL',
			title: 'Research Intern',
			when: 'Jun 2024 - Sep 2024',
			href: 'http://www.dendrites.org',
			points: [
				'Neural Computation Lab (Hausser Lab)',
				'Investigated data analysis techniques on electrophysiological neural recordings in CA1 and CA3 of mice hippocampus.',
				'Obtained Personal License (PIL A & B) for mice handling.',
				'Refactored and optimized the preprocessing algorithms for neuronal spike sorting.'
			]
		},
		{
			company: 'ORIon',
			title: 'Technical Team Member, Technical Team Lead',
			when: 'Jan 2022 - Sep 2022, Oct 2022 - Jul 2023',
			href: 'https://ori.ox.ac.uk/student-teams/team-orion/',
			points: [
				"Oxford Robotics Institute's student robotics team.",
				'Assimilated new members into the team, assisting with software setup and understanding of tasks.',
				"Demoed our robot during the Engineering Department's 16 Sep Open Day.",
				'Implemented programs for hotword detection and speech-to-text transcription for the robot.'
			]
		},
		{
			company: 'SAF',
			title: 'Intelligence Research Trainee, Intelligence Research Assistant',
			when: 'Jan 2019 - Apr 2019, Apr 2019 - Jan 2021',
			points: [
				"Mandatory military service in the Singapore Armed Forces.",
				'Conducted real-time investigations to support threat assessments during maritime crises.',
				'Trained to support Humanitarian Assistance and Disaster Relief (HADR) missions and Peace Support Operations (PSO).'
			]
		}
	]
};

export const projects = {
	section_title: 'What I’ve Built',
	section_id: 'Projects',
	list: [
		{
			title: 'Oxford BuildX 2025: Paperpal',
			points: [
				'Finalist and connected to VC.',
				'A research tool to chat about research papers.'
			],
			tools: ['Lovable', 'Supabase', 'Typescript'],
		},
		{
			title: 'London Neurohack 2025: TrueCadence',
			points: ['Adaptive video playback based on real-time user EEG signals.'],
			tools: ['Python', 'EEG', 'OpenBCI'],
			href: 'https://github.com/OxNeurotech/True-Cadence'
		},
		{
			title: 'AutoPhysio',
			points: [
				"3rd year design project at Oxford.",
				'EMG-powered knee brace for ACL rehab.'
			],
			tools: ['Python', 'typst', 'Swift'],
		},
		{
			title: 'X-Y Plotter',
			points: [
				"2nd year 3D printing module at Oxford.",
				'Pen plotter that turns digital images to drawings on paper.'
			],
			tools: ['Python', 'GCode', 'Solidworks'],
			href: 'https://github.com/LordJatonyas/XY-Plotter',
		},
		{
			title: 'Oxford Hack 2022: FoodSave',
			points: [
				"Winner of the 'Hack to reduce inequality' track.",
				'Food delivery for rough sleepers in Oxford.'
			],
			tools: ['Python', 'Django', 'SQLite3'],
			href: 'https://devpost.com/software/homeless-tracking-and-food-delivery-app'
		}
	]
};

export const contact = {
	section_title: 'Get in Touch',
	section_id: 'Contact',
	paragraphs: [
		`Send me an email if you're interested in investing in or joining AiMo Labs, or even just to chat about cool technologies in general!`
	],
	button: {
		text: `Email me`,
		href: "mailto: john.1201@icloud.com"
	}
};
