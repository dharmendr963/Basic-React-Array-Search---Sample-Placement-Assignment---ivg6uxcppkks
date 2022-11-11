@@ -8,6 +8,9 @@ const router = express.Router();
router.get('/allproducts', async (req, res) =>{
    try{
        const response = await Product.find();
        // set headers for allowing cross origin requests
        // Access-Control-Allow-Origin: *, www.abc.com
        // use commands for set headers
        res.status(200).json(response);
    }
    catch(err){
@@ -49,6 +52,24 @@ router.get('/searchbyid/:tempid', async (req, res) =>{
    console.log(req.params.tempid);
    try{
        const response = await Product.findOne({id: req.params.tempid});
        // show data on ejs template
        // res.render('ejsfile3', {response});

        res.status(200).json(response);
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
}) 

// http://localhost:4000/products/searchbycategory/{category}
router.get('/searchbycategory/:tempcategory', async (req, res) =>{
    console.log(req.params.tempcategory);
    try{
        const response = await Product.find({category: req.params.tempcategory});
        // show data on ejs template
        // res.render('ejsfile3', {response});

        res.status(200).json(response);
    }
    catch(err){
@@ -57,21 +78,40 @@ router.get('/searchbyid/:tempid', async (req, res) =>{
}) 


// http://localhost:4000/products/search_product/?id=12345

// http://localhost:4000/products/search_product/?id1=12345
router.get('/search_product', async (req, res) =>{
    console.log(req.query.id);
    console.log(req.query.id1);
    // console.log('inside products route')
    res.send('Router is working....')
}) 

router.put('/:id',  (req, res) =>{
// http://localhost:4000/products/updatebyid/{product_id}
router.put('/updatebyid/:id', async (req, res) =>{
    console.log(req.params.id);
    res.send('Router is working....')
    console.log(req.body);
    let tempId = req.params.id
    let tempData = req.body;
    try{
        const response = await Product.findOneAndUpdate({'id': tempId}, tempData, {new: true});
        res.status(200).json(response);
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
})

router.delete('/:id',  (req, res) =>{
    console.log(req.params.id);
    res.send('Router is working....')
// http://localhost:4000/products/deletebyid/{product_id}
router.delete('/deletebyid/:id', async (req, res) =>{
    console.log(req.body);
    try{
        let tempId = req.params.id;
        let responseDb = await Product.deleteOne({id: tempId});
        res.status(201).json(responseDb);
    }
    catch(err){
        res.status(400).json({Error: err.message})
    }
})
