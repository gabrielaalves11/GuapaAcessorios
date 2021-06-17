import api from "../shared/api";

// listar todas as categorias
const getAll = () => {
    return api.get("/category");
};

// listar categoria por id
const get = id => {
    return api.get(`/category/${id}`);
};

// adicionar categorias
const create = data => {
    return api.post("/category", data);
};

// atualizar categoria
const update = (id, data) => {
    return api.put(`/category/${id}`, data);
};

// remover categoria
const remove = id => {
    return api.delete(`/category/${id}`);
};

// pesquisar categoria
const findByName = name => {
    return api.get(`/category/GetByname/${name}`);
};

const CategoryDataService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
};

export default CategoryDataService;