import axios from "axios";


const useImageUpload = async(image)=> {
    const formData = new FormData();
    formData.append('image', image);

    try {
        const { data } = await axios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`,
            formData
          )
    return data.data.display_url;
    } catch (error) {
    return error.message
    }
}

export {useImageUpload }
