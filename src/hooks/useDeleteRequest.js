import { url } from "../config/configAxios";

const useDeleteRequest = () => {
  const handleDelete = id => {
    url.delete(`/products/${id}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
        }
      })
  };

  return [ handleDelete ];
};

export { useDeleteRequest };