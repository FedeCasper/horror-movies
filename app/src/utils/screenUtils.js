import { useNavigate } from 'react-router-dom';


export const handleCardClick = (id) => {
    const navigate = useNavigate(); 
    navigate(`/details/${id}`);
  };