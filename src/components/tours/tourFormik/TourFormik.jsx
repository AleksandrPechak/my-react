import clsx from 'clsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from 'react-redux';
import { addTour } from '../../../redux/tours/slice';

const continents = [
	'Asia',
	'Africa',
	'North America',
	'South America',
	'Antarctica',
	'Europe',
	'Australia',
];

const initialTour = {
	name: 'example',
	price: 1000,
	description: 'example',
	continent: 'Asia',
	ageCategory: 'children',
	isHot: false,
};

const TourSchema = Yup.object().shape({
	name: Yup.string().trim().min(1).max(10).required(),
	price: Yup.number().min(1).max(10000).required(),
	ageCategory: Yup.string().oneOf(['children', 'adult']).required(),
	isHot: Yup.boolean().required(),
	description: Yup.string().trim().min(1).max(100).required(),
	continent: Yup.string().oneOf(continents).required(),
});

const TourFormik = ({ visible, onClose }) => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		const nextTour = {
			...values,
			id: uuidv4(),
			name: values.name.trim(),
		};

		dispatch(addTour(nextTour));

		actions.resetForm();
		onClose();
	};

	return (
		<div className='tour-form' style={{ display: visible ? 'block' : 'none' }}>
			<Formik initialValues={initialTour} onSubmit={handleSubmit} validationSchema={TourSchema}>
				{(props) => {
					return (
						<>
							<button
								className='close'
								onClick={() => {
									props.resetForm();
									onClose();
								}}>
								x
							</button>
							<h2>Tour form</h2>
							<Form>
								<div className='common-input-wrapper'>
									<label>Name</label>
									<Field name='name' />
									<ErrorMessage name='name' component='p' className='common-error-msg' />
								</div>
								<div className='common-input-wrapper'>
									<label>Price</label>
									<Field type='number' name='price' />
									<ErrorMessage name='price' component='p' className='common-error-msg' />
								</div>

								<div>
									<p>Age category</p>
									<label>
										<Field type='radio' name='ageCategory' value='children' />
										With children
									</label>
									<label>
										<Field type='radio' name='ageCategory' value='adult' />
										18+
									</label>
									<ErrorMessage name='ageCategory' component='p' />
								</div>

								<div>
									<label>Hot tour</label>
									<Field type='checkbox' name='isHot' />
									<ErrorMessage name='isHot' component='p' />
								</div>

								<div className='common-input-wrapper'>
									<label>Description</label>
									<Field as='textarea' name='description' rows='5' />
									<ErrorMessage name='description' component='p' className='common-error-msg' />
								</div>

								<div className='common-input-wrapper'>
									<label>Continent</label>
									<Field as='select' name='continent'>
										<option value={'none'} disabled>
											none
										</option>
										{continents.map((continent) => (
											<option key={continent} value={continent}>
												{continent}
											</option>
										))}
									</Field>
									<ErrorMessage name='continent' component='p' className='common-error-msg' />
								</div>

								<button className='btn secondary' type='reset'>
									Clear
								</button>
								<button className={clsx('btn primary', { disabled: !props.isValid })} type='submit'>
									Save
								</button>
							</Form>
						</>
					);
				}}
			</Formik>
		</div>
	);
};

export default TourFormik;