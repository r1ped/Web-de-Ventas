import { Router } from 'express';
const router = Router();
import Products from '../Schemas/Products';
import Users from '../Schemas/Users';

router.get("/products", async(req, res, next) => {
	const AllProducts = await Products.find({}).sort({"_id": -1});
	try { 

	await res.json(AllProducts);

	} catch(error) {

		await res.json({

			product: 'Maintenance',
			title: 'Maintenance',
			descripcion: 'Maintenance',
			username: 'Maintenance',
			views: '00',
			price: '00'

		});
	}

});

router.get("/user/:id", async(req, res, next) => {
	try {

		const User = await Users.findById({_id:req.params.id});
		await res.json(User);

	} catch (error) {
		console.log(error)
	}
});

router.get("/product/:id", async(req, res, next) => {
	try {

		const Product = await Products.findById({_id:req.params.id});

		await res.json(Product);

	} catch (error){
		console.log(error);
	}
});

export default router;
