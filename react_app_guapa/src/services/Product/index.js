import api from "../shared/api";

// listar todos os produtos
const getAll = () => {
    return api.get("/product");
};

// listar produto por id
const get = id => {
    return api.get(`/product/${id}`);
};

// adicionar produtos
const create = data => {
    return api.post("/product", data);
};

// atualizar produto
const update = (id, data) => {
    return api.put(`/product/${id}`, data);
};

// remover produto
const remove = id => {
    return api.delete(`/product/${id}`);
};

// pesquisar produto
const findByName = name => {
    return api.get(`/product/GetByname/${name}`);
};

const ProductDataService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByName
};

export default ProductDataService;