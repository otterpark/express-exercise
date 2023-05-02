import {Router, type Request, type Response} from 'express';

import type Products from '../types/products';

const productRouter = Router();

const products: Products[] = [
	{
		category: 'Fruits', price: '$1', stocked: true, name: 'Apple',
	},
	{
		category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit',
	},
	{
		category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit',
	},
	{
		category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach',
	},
	{
		category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin',
	},
	{
		category: 'Vegetables', price: '$1', stocked: true, name: 'Peas',
	},
];

productRouter
	.route('/')
	.get((req: Request, res: Response) => {
		res.send({products});
	});

export default productRouter;
