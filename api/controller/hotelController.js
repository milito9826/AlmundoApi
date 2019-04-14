var mockHotel = require('./../data/data.json')

let listarHoteles = (req, res) => {
    return res.json(
        mockHotel
    );
}

let filtrarHoteles = (req, res) => {
    var hoteles = mockHotel.find(hotel => hotel.nit === req.params.nitHotel);
    return res.json(
        hoteles
    );
}

let filtroCategorias = (req, res) => {
    var hoteles = mockHotel.filter(hotel => hotel.categoria === req.params.categoria);
    return res.json(
        hoteles
    );
}

let filtroCiudad = (req, res) => {
    var hoteles = mockHotel.filter(hotel => hotel.ciudad === req.params.ciudad);
    return res.json(
        hoteles
    );
}

let filtroCiudadCategoria = (req, res) => {
    var hotelesFiltrados = mockHotel.filter(hotel => hotel.ciudad === req.params.ciudad);
    var hoteles = hotelesFiltrados.filter(filtro => filtro.categoria === req.params.categoria);
    return res.json(
        hoteles
    );
}

let filtroCiudadPrecioMenorAPrecioMayor = (req, res) => {
    var hotelesFiltrados = mockHotel.filter(hotel => hotel.ciudad === req.params.ciudad);
    var hoteles = hotelesFiltrados.filter(filtro => filtro.precioMasBajo >= req.params.precioDe &&  filtro.precioMasBajo <= req.params.precioHasta );
    return res.json(
        hoteles
    );
}

let filtroCategoriaPrecioMenorAPrecioMayor = (req, res) => {
    var hotelesFiltrados = mockHotel.filter(hotel => hotel.categoria === req.params.categoria);
    var hoteles = hotelesFiltrados.filter(filtro => filtro.precioMasBajo >= req.params.precioDe &&  filtro.precioMasBajo <= req.params.precioHasta );
    return res.json(
        hoteles
    );
}

let filtroCategoriaCiudadPrecioMenorAPrecioMayor = (req, res) => {
    var hotelesFiltrados = mockHotel.filter(hotel => hotel.ciudad === req.params.ciudad);
    var hoteles = hotelesFiltrados.filter(filtro => filtro.categoria === req.params.categoria);
    var hotelesPrecios = hoteles.filter(filtro => filtro.precioMasBajo >= req.params.precioDe &&  filtro.precioMasBajo <= req.params.precioHasta );
    return res.json(
        hotelesPrecios
    );
}

let filtroHotelesPrecioMenorAPrecioMayor = (req, res) => {
    var hoteles = mockHotel.filter(filtro => filtro.precioMasBajo >= req.params.precioDe &&  filtro.precioMasBajo <= req.params.precioHasta );
    return res.json(
        hoteles
    );
}

let guardarHotel = (req, res) => {
    let hotel = {
        nit: req.body.nit,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
        ciudad: req.body.ciudad,
        precioMasBajo: req.body.ciudad
    };

    mockHotel.push(hotel);

    return res.status(201).json({
        ok: true,
        Hotel: hotel
    });
}

let modificarHotel = (req, res) => {
    let hotel = {
        nit: req.body.nit,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        categoria: req.body.categoria,
        ciudad: req.body.ciudad,
        precioMasBajo: req.body.ciudad

    };

    indexHotel = mockHotel.findIndex(HotelUpdate => HotelUpdate.nit === req.params.nitHotel);
    
    mockHotel[indexHotel] = { hotel };

    return res.status(201).json({
        ok: true,
        Hotel: indexHotel
    });
}

let eliminarHotel = (req, res) => {

    indexHotel = mockHotel.findIndex(motelDelete => motelDelete.nit === req.params.nitHotel);
    
    mockHotel.splice(indexHotel, 1);

    return res.status(201).json({
        ok: true,
        Hotel: indexHotel
    });
}

module.exports = {
    listarHoteles,
    filtrarHoteles,
    filtroCategorias,
    filtroCiudad,
    filtroCiudadCategoria,
    guardarHotel,
    modificarHotel,
    eliminarHotel,
    filtroCiudadPrecioMenorAPrecioMayor,
    filtroCategoriaPrecioMenorAPrecioMayor,
    filtroCategoriaCiudadPrecioMenorAPrecioMayor,
    filtroHotelesPrecioMenorAPrecioMayor
}