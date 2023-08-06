import { httpService } from '../../services';

// api example:

export const getSomeData = () => {
    return httpService.get('/');
};
