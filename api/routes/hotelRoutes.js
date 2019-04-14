const express = require('express');
var hotelController = require('../controller/hotelController');
var router = express.Router();

router.get   ('/listarHoteles', hotelController.listarHoteles);
router.post  ('/guardarHotel', hotelController.guardarHotel);
router.delete('/eliminarHotel/:nitHotel', hotelController.eliminarHotel);
router.put   ('/actualizarHotel/:nitHotel', hotelController.modificarHotel);
router.get   ('/filtrarHoteles/:nitHotel', hotelController.filtrarHoteles);
router.get   ('/filtrarHotelesCategoria/:categoria', hotelController.filtroCategorias);
router.get   ('/filtrarHotelesCiudad/:ciudad', hotelController.filtroCiudad);
router.get   ('/filtrarHotelesCiudadCategoria/:categoria/:ciudad', hotelController.filtroCiudadCategoria);
router.get   ('/filtrarHotelesCiudadCiudadPrecios/:ciudad/:precioDe/:precioHasta', hotelController.filtroCiudadPrecioMenorAPrecioMayor);
router.get   ('/filtrarHotelesCategoriaPrecios/:categoria/:precioDe/:precioHasta', hotelController.filtroCategoriaPrecioMenorAPrecioMayor);
router.get   ('/filtrarHotelesCategoriaCiudadPrecios/:ciudad/:categoria/:precioDe/:precioHasta', hotelController.filtroCategoriaCiudadPrecioMenorAPrecioMayor);
router.get   ('/filtrarHotelesPrecios/:precioDe/:precioHasta', hotelController.filtroHotelesPrecioMenorAPrecioMayor);

module.exports = router;