const router = require('express').Router();

const { CreateService, GetService, EditService, DeleteService ,getAlltypeservice} = require('../../1 - Application/serviceApplication')
const { check, validationResult } = require('express-validator');


router.post('/create-service',[
    check('name', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('description', 'La descripcion del servicio es obligatoria').not().isEmpty(),
    check('typeService', 'Debe terner un tipo de servicio').not().isEmpty()
], async (req, res) => {
    // if(req.session.email){
        const errors = validationResult(req);
        if(!errors.isEmpty()){ return res.status(422).json({errores: errors.array()}) }
        await CreateService(req, res);  
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
});

router.get('/get-services', [],async (req, res) => {
    // if(req.session.email){
        await GetService(req, res); 
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
})

router.put('/edit-service', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('description', 'La descripcion es obligatoria').not().isEmpty(),
    check('type', 'El tipo de servicio es obligatorio').not().isEmpty(),
    check('price', 'El precio  del servicio es obligatorio').not().isEmpty(),
], async (req, res) => {
    // if(req.session.email){
        await EditService(req, res);  
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  }
})

router.delete('/delete-service', [
    check('idService', 'Debe enviar el id del servicio para poder eliminarlo').not().isEmpty(),
], async (req, res) => {
    // if(req.session.email){
        await DeleteService(req, res);
    //  }else{
    //     res.status(401).json({ error: 'Sesion terminada' })
    //  } 
})

router.get('/get-service', [],async (req, res) => {
        await getAlltypeservice(req, res); 
})

module.exports = router;