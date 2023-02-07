import { Axios } from 'axios';
import * as API from 'config';

export interface Extra {
	client: Axios;
	api: typeof API;
}
