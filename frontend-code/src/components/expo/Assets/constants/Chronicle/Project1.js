// import logo from "../images/project expo_Vfinal_Crypt1.png"
import logo from './AWSS_Poster.png';

const project1 = {
	id: 1,
	oneline:
		' In this project we wrote short stories based on different cultures. We’ve received feedback on said stories and modified them. The collection of the final modified stories is the end product.',
	// copy the abstract here
	logo: logo,
	name: 'Around the world in Short Stories', // replace the name here
	imgUrl: [],
	members: [
		'Susmita Saha',
		'Joshitha Reddy Dongala',
		'Pratik Kumar Shivnani',
		'Anjishnu Laskar',
		' Adarsh Kishore',
		'Harsha Satija',
		'Vishnu Radhakrishnan',
	], // add both mentors and mentees here, each name has to under quotes
	description: {
		aim: (
			<div>
				In this project we wrote short stories based on different cultures.
				We’ve received feedback on said stories and modified them. The
				collection of the final modified stories is the end product.
			</div>
		),
		des: (
			<div>
				What we aim to do in this project is create a collection of short
				stories that showcase different cultures and better understand what
				impact such a collection might have on society. We also will be looking
				into the aspect of ‘what exactly sells in the current day’. That is when
				we’ll be looking into questions like ‘What do people want to read?’. How
				can we make our short stories more appealing to the audience?
			</div>
		),
		res: (
			<div>
				To read our stories{'   '}
				<a
					href="https://iste.nitk.ac.in/#/awss/"
					className="waves-light btn-small btnColor"
					style={{ marginLeft: '2vw' }}
				>
					Click me!
				</a>
			</div>
		),
	},
};
export default project1;
